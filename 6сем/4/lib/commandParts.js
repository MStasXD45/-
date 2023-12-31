const regex = /^\/([^@\s]+)@?(?:(\S+)|)\s?([\s\S]+)?$/i;

/**
 * Мидлвар для разбора текста и команд в групповом чате
 */
module.exports = commandParts = async (ctx, next) => {
  // В переменную text запишется текст сообщения для бота
  const {
    message: { text = "" },
  } = ctx;
  // Разобьём это сообщение на части
  const parts = regex.exec(text);
  // Если, к примеру, одно слово, то нечего разбивать
  if (!parts) return next();
  // Сформируем объект command, который присоеденим к ctx.state
  const command = {
    text,
    command: parts[1],
    bot: parts[2],
    args: parts[3],
    get splitArgs() {
      return !parts[3] ? [] : parts[3].split(/\s+/).filter((arg) => arg.length);
    },
  };
  ctx.state.command = command;
  return next();
};

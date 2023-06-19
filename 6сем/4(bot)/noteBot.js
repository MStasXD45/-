
const { Telegraf } = require("telegraf");

// Создать бота с полученным ключом
const bot = new Telegraf("5963802065:AAG0MaC3QelACS0n_w5a-DQ_3wch6fdP6yg");

// Обработчик начала диалога с ботом
bot.start((ctx) =>
  ctx.reply(
    `Приветствую, ${
       ctx.from.first_name ? ctx.from.first_name : "хороший человек"
    }! Набери /help и увидишь, что я могу.`
  )
);

// Обработчик команды /help
bot.help((ctx) => ctx.reply("Справка в процессе"));

// Обработчик команды /whoami
bot.command("whoami", (ctx) => {
  const { id, username, first_name, last_name } = ctx.from;
  return ctx.replyWithMarkdown(`Кто ты в телеграмме:
*id* : ${id}
*username* : ${username}
*Имя* : ${first_name}
*Фамилия* : ${last_name}
*chatId* : ${ctx.chat.id}`);
});

// Обработчик простого текста
bot.on("text", (ctx) => {
  return ctx.reply(ctx.message.text);
});

// Запуск бота
bot.launch();

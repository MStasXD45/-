//require("dotenv").config();
//const fetch = require("node-fetch");

const { Telegraf } = require("telegraf");
const commandParts = require("../4/lib/commandParts");
const { randomAnimal } = require("./lib/animalPhoto");

// Создать бота с полученным ключом
//const bot = new Telegraf(process.env.TELEGRAM_TOKEN_EDU);
const bot = new Telegraf("5993240566:AAGSut-tS2217yc68lMVgi72eHt-tEYG97U");

bot.use(commandParts);
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
  return ctx.replyWithMarkdownV2(`Кто ты в телеграмме:
*id* : ${id}

*Имя* : ${first_name}
*Фамилия* : ${last_name}
*chatId* : ${ctx.chat.id}`);
});
//*username* : ${username}

//audio
bot.command("audio", (ctx) => {
    return ctx.replyWithAudio({ source: "4/audio.mp3" });
  });

  //Foto
  bot.command("photo", async (ctx) => {
    const chatId = ctx.message.chat.id;
    // Получение аргументов
    const { args = "" } = ctx.state.command;
    // Возможно стоит проверить: верные аргументы пришли или нет
    const whatAnimal = args;
    // Пользователь, не скучай, я начал работу
    ctx.telegram.sendMessage(chatId, "Ищу фото ...");
    // Запрос урла картинки
    const url = await randomAnimal(whatAnimal);
    // Предусмотрительно защититься от null, который может внезапно прийти из апи (увы, да)
    if (!url) {
      return ctx.reply("Поиск фото не удался");
    }
    // А это что- gif, что ли пришёл, да?
    const extension = url.split(".").pop();
    if (extension.toLowerCase() === "gif") {
      // Если gif, значит оформить анимешку
      return telegram.sendAnimation(chatId, url);
    }
    return ctx.telegram.sendPhoto(chatId, url);
  });
  
  
bot.command("group", async (ctx) => {
    //const catUrl = await randomAnimal("cat");
    const dogUrl = await randomAnimal("dog");
    const foxUrl = await randomAnimal("fox");
    return ctx.replyWithMediaGroup([
     // { type: "photo", media: catUrl, caption: "Мяу" },
      { type: "photo", media: dogUrl, caption: "Гав" },
      { type: "photo", media: foxUrl, caption: "Тяф" },
    ]);
  });
  


// Обработчик простого текста
bot.on("text", (ctx) => {
    
  return ctx.reply(ctx.message.text.split('').sort(function(){return 0.5-Math.random()}).join(''));
});


  

// Запуск бота
bot.launch();

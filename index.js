const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7000687042:AAHDYPElWpccd_gf-DVGHXcx8L1NyWtwPcU';
const webAppUrl = "https://hamster-killer.netlify.app";


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const msgText = msg.text;

  if(msgText === '/start'){
    await bot.sendMessage(chatId, 'НАЖМИ КНОПКУ, ЧТО ПОЯВИЛАСЬ ВНИЗУ БЫСТРО', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'ВОТ СЮДА ЖМИ ЗАРАЗА', web_app: {url: webAppUrl}}]
            ]
        }
    } ); 
  }
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
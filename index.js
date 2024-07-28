const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
const webAppUrl = "https://master--hamster-killer.netlify.app/";
const PORT = process.env.PORT || 5000;
const token = process.env.TOKEN;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload());
app.use('/api', router)


// Обработка ошибок
app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({message:"РАБОТАЕТ"})
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log( `сервер запущен на порту ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start();

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
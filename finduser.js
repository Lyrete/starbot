require('dotenv').config();
const Tgfancy = require('tgfancy');
const { Pool } = require('pg');
const pool = new Pool()
const token = process.env.TGBOT_APIKEY;
const bot = new Tgfancy(token, {polling:true});

bot.on('message', async (msg) => {
    console.log(msg);
})
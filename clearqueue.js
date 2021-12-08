require('dotenv').config()
const Tgfancy = require('tgfancy');
const { Pool } = require('pg');
const pool = new Pool()
const token = process.env.TGBOT_APIKEY;
const bot = new Tgfancy(token, {polling:true});

bot.on('message', (msg) => {
    console.log(msg);
});

bot.onText(/\/send/, async (msg) => {
    if(msg.chat.id == 151737471){
        const fs = require('fs');
        fs.readFile('./msg.txt', 'utf8', function(err, data) {
            if (err) throw err;
            bot.sendMessage(32013148, data);
            bot.sendMessage(336934704, data);
        });
        
    }
});
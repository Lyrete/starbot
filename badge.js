require('dotenv').config();
const Tgfancy = require('tgfancy');
const { Pool } = require('pg');
const pool = new Pool()
const token = process.env.TGBOT_APIKEY;
const bot = new Tgfancy(token, {polling:true});

async function getGroupData(chat_id){
    var {rows} = await pool.query('SELECT * FROM users WHERE userid = $1', [chat_id]);
    if(rows.length == 0){
        return false;
    }
    const group_id = rows[0].group_id;
    var {rows} = await pool.query('SELECT * FROM groups WHERE id = $1', [group_id]);
    return rows[0];
};

async function getUser(id) {
    var {rows} = await pool.query('SELECT * FROM users WHERE userid = $1', [id]);
    try{        
        return rows[0];
    }catch{
        return false;
    }
}

bot.on('message', async (msg) => {
    console.log(msg);
})

bot.onText(/\/group/, async (msg) => {
    const user = await getUser(msg.chat.id);

    if(!user){
        bot.sendMessage(msg.chat.id, `Unable to find groupcode`);
    }

    if(!user.group_id){
        bot.sendMessage(msg.chat.id, `Unable to find groupcode`);
    }

    const group = await getGroupData(msg.chat.id);

    if(!group){
        bot.sendMessage(msg.chat.id, `Unable to find groupcode`);
    }
    
    bot.sendMessage(msg.chat.id, (`Your group's code is: ${group.groupcode}`)) 
});

bot.onText(/\/check/, async (msg) => {
    bot.resolveChatId('151737471')
        .then(function(result) {
            console.log(result);
        });
});
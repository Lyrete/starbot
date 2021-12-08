require('dotenv').config()
const Tgfancy = require('tgfancy');
const { Pool } = require('pg');
const pool = new Pool()
const token = process.env.TGTESTBOT_APIKEY;
const bot = new Tgfancy(token, {polling:true});

const fly_points = [2, 7, 9, 13];
const end = 16;

/* bot.setWebHook('https://home.lyrete.me', {
    certificate: '../homeApp/server.crt',
}); */

async function getCorrectMessage(id, lang){
    var {rows} = await pool.query('SELECT * FROM msgs WHERE id = $1', [id]);
    return rows[0][lang];
}

bot.onText(/\/gdpr/, async (msg) => {
    const user = await getUser(msg.chat.id);
    bot.sendMessage(msg.chat.id, (await getCorrectMessage(38, user.lang)));
});

bot.onText(/\/extra/, async (msg) => {
    const user = await getUser(msg.chat.id);
    const text = await getCorrectMessage(35, user.lang);
    if(user.group_id == null){
        bot.sendMessage(msg.chat.id, await getCorrectMessage(16, user.lang));
        return false;
    }
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
            keyboard: [ ['1.', '2.', '3.'], ['4.', '5.', '6.'] , ['7.', '8.', '9.'], ['10.', '11.'] ]
        }
    };
    bot.sendMessage(msg.chat.id, text, opts);
});

//block to catch extra buttons

    {
        var fs = require("fs");
        bot.onText(/^1\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_1 == null){
                await pool.query('UPDATE groups SET extra_1 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_1 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/1.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^2\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_2 == null){
                await pool.query('UPDATE groups SET extra_2 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_2 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/2.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^3\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_3 == null){
                await pool.query('UPDATE groups SET extra_3 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_3 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/3.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^4\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_4 == null){
                await pool.query('UPDATE groups SET extra_4 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_4 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/4.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^5\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_5 == null){
                await pool.query('UPDATE groups SET extra_5 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_5 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/5.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^6\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_6 == null){
                await pool.query('UPDATE groups SET extra_6 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_6 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/6.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^7\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_7 == null){
                await pool.query('UPDATE groups SET extra_7 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_7 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/7.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^8\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_8 == null){
                await pool.query('UPDATE groups SET extra_8 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_9 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/8.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^9\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_9 == null){
                await pool.query('UPDATE groups SET extra_9 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_9 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/9.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^10\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_10 == null){
                await pool.query('UPDATE groups SET extra_10 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_10 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/10.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
        bot.onText(/^11\.$/, async (msg) => {
            const group = await getGroupData(msg.chat.id);
            const user = await getUser(msg.chat.id);
            if(group.extra_11 == null){
                await pool.query('UPDATE groups SET extra_11 = $2 WHERE id = $1', [group.id, 1]);
            }
            if(group.extra_11 == 2){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(39, user.lang)), {reply_markup: {remove_keyboard: true}});
                return false;
            } 
            const f = fs.readFileSync(`./extra/${user.lang}/11.txt`).toString('utf-8');
            var array = f.split('#');
            bot.sendMessage(msg.chat.id, array[0], {reply_markup: {remove_keyboard: true}});
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(42, user.lang)));
        });
    };

bot.onText(/\/send/, async (msg, match) => {
    if(msg.chat.id === 151737471){
        bot.sendMessage(1201111144, 'Aloitukseen tarvittava koodi löytyy vastakkaiselta puolelta noppaa!');
    }
});

//every new user sends this first when starting a convo with the bot so use this to get users into db
bot.onText(/\/start/, async (msg) => {
    
    var {rows} = await pool.query('SELECT * FROM users WHERE userid = $1', [msg.chat.id]);
    if(rows.length == 0){
        pool.query(`INSERT INTO users(userid, created_on, lang) VALUES ($1, to_timestamp($2), $3) RETURNING *`, [msg.chat.id, (Date.now() / 1000.0), 'en']);
    }
    bot.sendMessage(msg.chat.id, 'Welcome to Otaniemen Tähti! You can choose what language I speak by using the /lang command.');
    bot.sendMessage(msg.chat.id, 'Before you begin the game, either make a new group using /newgroup or join an existing one using /join.');
    bot.sendMessage(msg.chat.id, 'If you\'d like to know how we handle your data, use /gdpr.');
});    

//generate random groupcode
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

//accepts chatid (userid) as parameter and returns the group the user it's talking to is in
async function getGroup_id(id) {
    var {rows} = await pool.query('SELECT * FROM users WHERE userid = $1', [id]);
    const group_id = rows[0].group_id;
    return group_id;
}

//helper function to complete current checkpoint of group id
async function completeCheckpoint(id){
    await pool.query('UPDATE groups SET completed = $1 WHERE id = $2', [true, id]);
}

async function getUser(id) {
    var {rows} = await pool.query('SELECT * FROM users WHERE userid = $1', [id]);
    try{        
        return rows[0];
    }catch{
        return false;
    }
}

//function to get a random jewel from detours
function getJewel(){
    const prob = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3];
    const jewels = [0, 300, 600, 1000];

    var idx = Math.floor(Math.random() * prob.length);
    return {money: jewels[prob[idx]], i: prob[idx]};
}

async function joinGroup(code, user_id){
    var {rows} = await pool.query('SELECT * FROM groups WHERE groupcode LIKE $1', [code]);
    try{
        const group_id = rows[0].id;
        pool.query('UPDATE users SET group_id = $1 WHERE userid = $2', [group_id, user_id]);
        return true;
    }catch{
        return false;
    }    
}

async function sendInstruction(group, chat){
    const user = await getUser(chat);
    var fs  = require("fs");
    fs.readFile(`./instructions/${user.lang}/${group.current_checkpoint}.txt`, function(err, f){
        var array = f.toString().split('#');
        bot.sendMessage(chat, array[1].trim());
    });
}

async function checkArrival(group, code, chat){
    //if group has already done the checkpoint (or arrived at it)
    const user = await getUser(chat);
    if(group.completed){
        const msg = await getCorrectMessage(3, user.lang);
        bot.sendMessage(chat, msg);
        return false;
    }
    if(group.arrived){
        const msg = await getCorrectMessage(3, user.lang);
        bot.sendMessage(chat, msg);
        return false;
    }
    const data = {admin: false};
    if(chat == 151737471 || chat == 442750672){
        data.admin = true;
    }

    const msg2 = await getCorrectMessage(5, user.lang);
    const msg6 = await getCorrectMessage(6, user.lang);
    const msg7 = await getCorrectMessage(7, user.lang);
    
    const jewel = getJewel();
    const jewelName = await getCorrectMessage(30 + jewel.i, user.lang);

    var fs  = require("fs");
    fs.readFile(`./instructions/${user.lang}/${group.current_checkpoint}.txt`, function(err, f){
        if(!f){
            return false;
        }
        var array = f.toString().split('#');
        
        if(typeof code === 'undefined'){
            bot.sendMessage(chat, msg2);
            return false;
        }

        //if the given code is wrong
        if(code.trim() != array[0].trim() && !data.admin){
            bot.sendMessage(chat, msg6);
            pool.query('UPDATE users SET last_msg = $2 WHERE userid = $1', [chat, '/arrive']);
        }else if(array[2].trim() == 'jewel'){
            var money = 0;
            if(jewel.i != 0){
                bot.sendMessage(chat, array[1].replace('*', jewelName).replace("^", jewel.money));
                money = jewel.money;
            }else{
                bot.sendMessage(chat, array[3]);
            }
            pool.query('UPDATE groups SET arrived = $2, completed = $2, money = $3 WHERE id = $1', [group.id, true, group.money + money]);
        }else if(array[2].trim() == 'diamond'){
            bot.sendMessage(chat, array[1]);
            pool.query('UPDATE groups SET current_checkpoint = $3, current_clue = $4, arrived = $2, completed = $2 WHERE id = $1', [group.id, false, group.current_checkpoint + 1, 1]);
            bot.sendMessage(chat, msg7);
            sendClue(group.current_checkpoint + 1, 1, chat, user.lang);
        }else if(array[2].trim() == 'none'){
            bot.sendMessage(chat, array[1]);
            pool.query('UPDATE groups SET current_checkpoint = $3, current_clue = $4, arrived = $2, completed = $2 WHERE id = $1', [group.id, false, group.current_checkpoint + 1, 1]);
            sendClue(group.current_checkpoint + 1, 1, chat, user.lang);
        }else if(array[2].trim() == 'riddle'){
            bot.sendMessage(chat, array[1]);
            pool.query('UPDATE groups SET current_checkpoint = $3, current_clue = $4, arrived = $2, completed = $2 WHERE id = $1', [group.id, false, group.current_checkpoint + 1, 1]);
            bot.sendPhoto(chat, './clues/pics/12.png');
            sendClue(group.current_checkpoint + 1, 1, chat, user.lang);
        }else{
            pool.query('UPDATE groups SET arrived = $2 WHERE id = $1', [group.id, true]);
            sendInstruction(group, chat);
        }
    });

    if(group.current_checkpoint == end){
        pool.query('UPDATE groups SET completed = $2 WHERE id = $1', [group.id, true]);
        bot.sendPhoto(chat, './finisher.png');        
        bot.sendMessage(chat, (await getCorrectMessage(44, user.lang)));
    }

};

function checkCompletion(group, msg, req, text){
    if(req == 'roll' && msg.text.toLowerCase() == 'roll'){
        const roll = Math.floor(Math.random() * 6) + 1;
        const money = [0, 0, 100, 100, 200, 300];
        pool.query('UPDATE groups SET money = $2 WHERE id = $1', [group.id, group.money + money[roll-1]]);
        completeCheckpoint(group.id);
        const message = text.replace('*', roll).replace('^', money[roll-1]);
        bot.sendMessage(msg.chat.id, message);
        return true;             
    }

    //check for photo answers to checkpoints
    if(req == 'photo' && msg.photo){
        completeCheckpoint(group.id);
        pool.query('UPDATE groups SET money = $2 WHERE id = $1', [group.id, group.money + 300]);
        bot.sendMessage(msg.chat.id, text.replace('^', 300));
        bot.sendPhoto(-529836929, msg.photo[0].file_id, {caption: `Sent by @${msg.from.username} (${msg.chat.id}) from checkpoint ${group.current_checkpoint}`});
        return true;             
    }

    //check for either photo or video answers
    if(req == 'photo/video' && (msg.photo || msg.video)){
        completeCheckpoint(group.id);
        bot.sendMessage(msg.chat.id, text);
        if(msg.photo){
            bot.sendPhoto(-529836929, msg.photo[0].file_id, {caption: `Sent by @${msg.from.username} (${msg.chat.id}) from checkpoint ${group.current_checkpoint}`});
        }else if(msg.video){
            bot.sendVideo(-529836929, msg.video.file_id, {caption: `Sent by @${msg.from.username} (${msg.chat.id}) from checkpoint ${group.current_checkpoint}`});
        }
        return true;             
    }

    //check for just video
    if(req == 'video' && (msg.video)){
        completeCheckpoint(group.id);
        bot.sendMessage(msg.chat.id, text);
        if(msg.video){
            bot.sendVideo(-529836929, msg.video.file_id, {caption: `Sent by @${msg.from.username} (${msg.chat.id}) from checkpoint ${group.current_checkpoint}`});
        }
        return true;             
    }

    //check for numeric answers to checkpoints
    if(req == 'int' && Number.isInteger(parseInt(msg.text))){
        completeCheckpoint(group.id);
        bot.sendMessage(msg.chat.id, text);
        return true;             
    }

    return false;
}

//logging every msg for debug and some checkpoint's answers
bot.on('message', async (msg) => {
    const user = await getUser(msg.chat.id);
    console.log(new Date().toLocaleTimeString());
    console.log(msg);

    const data = {msg: msg.text}

    //update db with the last msg sent since we already pulled the old one
    if(msg.text){
        await pool.query('UPDATE users SET last_msg = $1 WHERE userid = $2', [data.msg, msg.chat.id]);
    }else{
        await pool.query('UPDATE users SET last_msg = $1 WHERE userid = $2', ['invalid msg to store', msg.chat.id]);
    }

    //catch the cases where the user hasn't joined a group yet
    if(!user){
        return false;
    }

    if(user.last_msg == null){
        user.last_msg = 'not valid';
    }

    //catch whether we've come from /join or /arrive
    if(user.last_msg.trim() == '/join'){
        const code = msg.text;
        if(typeof code === 'undefined'){
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(6, user.lang)));
        }else if(await joinGroup(code, msg.chat.id)){
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(8, user.lang)).replace("${code}", code));
        }else{
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(9, user.lang)).replace("${code}", code));
        }
    }

    if(user.group_id == null){
        return false;
    }

    
    if(msg.entities){
        if(msg.entities[0].type == 'bot_command'){
            return false;
        }
    }

    const group = await getGroupData(msg.chat.id); 
    const extra = ['1.', '2.','3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.'];
    
    if(extra.includes(`${user.last_msg.trim()}`)){
        const number = user.last_msg.trim().slice(0, -1);
        var fs  = require("fs");
        const f = fs.readFileSync(`./extra/${user.lang}/${number}.txt`).toString('utf-8');
        var array = f.split('#');
        if(array[1].trim() == 'photo' && msg.photo){
            pool.query(`UPDATE groups SET extra_${number} = $2, money = $3 WHERE id = $1`, [group.id, 2, group.money + 100]);
            bot.sendMessage(msg.chat.id, array[2]);
            bot.sendPhoto(-529836929, msg.photo[0].file_id, {caption: `Sent by @${msg.from.username}`});
            return true;
        }
        if(array[1].trim() == 'done' && msg.text.toLowerCase() == 'done'){
            pool.query(`UPDATE groups SET extra_${number} = $2, money = $3  WHERE id = $1`, [group.id, 2, group.money + 100]);
            bot.sendMessage(msg.chat.id, array[2]);
        }
        if(array[1].trim() == 'int' && msg.text){
            if(array[2].trim() == parseInt(msg.text)){
                pool.query(`UPDATE groups SET extra_${number} = $2, money = $3  WHERE id = $1`, [group.id, 2, group.money + 100]);
                bot.sendMessage(msg.chat.id, array[3]);                
            }else if(array[2].trim().split('-')[0] == 1 && parseInt(msg.text) > 0 && parseInt(msg.text) <= 5){
                pool.query(`UPDATE groups SET extra_${number} = $2, money = $3  WHERE id = $1`, [group.id, 2, group.money + 100]);
                bot.sendMessage(msg.chat.id, array[3]);
            }else{
                bot.sendMessage(msg.chat.id, array[4]);
            }
            
        }
        if(array[1].trim() == 'word' && msg.text){
            if(array[2].trim() == msg.text.toLowerCase()){
                pool.query(`UPDATE groups SET extra_${number} = $2, money = $3  WHERE id = $1`, [group.id, 2, group.money + 100]);
                bot.sendMessage(msg.chat.id, array[3]); 
            }else{
                bot.sendMessage(msg.chat.id, array[4]);
            }
        }
    }
    
    
       

    if(group.arrived && !group.completed){
        var fs  = require("fs");
        const f = fs.readFileSync(`./instructions/${user.lang}/${group.current_checkpoint}.txt`).toString('utf-8');
        var array = f.split('#');

        //get the requirement out of the instructions
        const req = array[2].trim();

        //ADD BELOW for different checkpoints
        const passed = checkCompletion(group, msg, req, array[3]);
        if(passed){
            if(fly_points.includes(group.current_checkpoint)){
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(10, user.lang)))
            }else{
                bot.sendMessage(msg.chat.id, (await getCorrectMessage(11, user.lang)));
            }
        }else{
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(12, user.lang)));
        }
            
    }

    if(user.last_msg.trim() == '/arrive'){
        const code = msg.text;
        await checkArrival(group, code, msg.chat.id);
    }

    if(user.last_msg.trim() == '/begin' && group.current_checkpoint == 0){
        var fs = require("fs");
        const f = fs.readFileSync(`./instructions/${user.lang}/${group.current_checkpoint}.txt`).toString('utf-8');
        const correct = f.split("#")[0].trim();
        const code = msg.text;
        if(typeof code === 'undefined'){
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(5, user.lang)));
        }else if(correct === code){
            pool.query('UPDATE groups SET arrived = $2 WHERE id = $1', [group.id, true]);
            bot.sendMessage(msg.chat.id, f.split("#")[1].trim());
        }else{
            bot.sendMessage(msg.chat.id, (await getCorrectMessage(6, user.lang)));
        }
    }

    
});

//Helper function to get the group's data into an object
async function getGroupData(chat_id){
    var {rows} = await pool.query('SELECT * FROM users WHERE userid = $1', [chat_id]);
    if(rows.length == 0){
        return false;
    }
    const group_id = rows[0].group_id;
    var {rows} = await pool.query('SELECT * FROM groups WHERE id = $1', [group_id]);
    return rows[0];
};

//command to register a new group
bot.onText(/\/newgroup/, async (msg) => {
    const groupcode = makeid();

    const user = await getUser(msg.chat.id);

    const msg29 = await getCorrectMessage(29, user.lang);
    const msg30 = await getCorrectMessage(30, user.lang);

    //insert groupcode into groups
    
        pool.query('INSERT INTO groups(groupcode, created_on, created_by) VALUES ($1, to_timestamp($2), $3) RETURNING *', [groupcode, (Date.now() / 1000.0), user.id], (err, res) => {
        try{
            const group_id = res.rows[0].id;

            pool.query('UPDATE users SET group_id = $1 WHERE userid = $2', [group_id, msg.chat.id]);

            bot.sendMessage(msg.chat.id, msg29.replace('${groupcode}', groupcode));
            bot.sendMessage(msg.chat.id, msg30);
        }catch{
            pool.query('INSERT INTO groups(groupcode, created_on, created_by) VALUES ($1, to_timestamp($2), $3) RETURNING *', [groupcode + 'A', (Date.now() / 1000.0), user.id], (err, res) => {
        

                const group_id = res.rows[0].id;
        
                pool.query('UPDATE users SET group_id = $1 WHERE userid = $2', [group_id, msg.chat.id]);
        
                bot.sendMessage(msg.chat.id, msg29.replace('${groupcode}', groupcode + 'A'));
                bot.sendMessage(msg.chat.id, msg30);
            });
        }   

        
    });
         
});

bot.onText(/\/help/, async (msg) => {
    const user = await getUser(msg.chat.id);
    if(!user){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(40, 'en')))
    }else{
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(40, user.lang)))
    }
    
});

//command to join an existing group
bot.onText(/\/join (.+)/, async (msg, match) => {
    //check for correct format of the msg
    const cmd = match;
    const givencode = cmd[1].toUpperCase();

    const user = await getUser(msg.chat.id);
    const msg9 = (await getCorrectMessage(9, user.lang));
    const msg8 = (await getCorrectMessage(8, user.lang));

    //check if group with given code exists
    pool.query('SELECT * FROM groups WHERE groupcode LIKE $1', [givencode], (err, res) => {
        if (err) {
            throw err;
        }
        
        if (res.rows.length === 0){
            bot.sendMessage(msg.chat.id, msg9.replace("${code}", givencode));
        }else{ // if it does then join the group
            const group_id = res.rows[0].id;

            pool.query('UPDATE users SET group_id = $1 WHERE userid = $2', [group_id, msg.chat.id], (err, res) => {
                if (err) {
                    throw err;
                }
            });                
            
            bot.sendMessage(msg.chat.id, msg8.replace("${code}", givencode));            
        }
    });        
});

//all handling command that goes forward
bot.onText(/\/next/, async (msg) => {
    const user = await getUser(msg.chat.id);
    if(user.group_id == null){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(16, user.lang)));
        return false;
    }
    const group = await getGroupData(msg.chat.id);
    if(group.current_checkpoint == 0 && group.completed != true){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(34, user.lang)));
        return false;
    }
    if(group.current_checkpoint == end && group.arrived){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(43, user.lang)));
        return false;
    }
    
    if(group.arrived && group.completed){
        //case where we completed the current checkpoint so we start going to the next one
        pool.query('UPDATE groups SET current_clue = 1, current_checkpoint = $2, arrived = $3, completed = $3 WHERE id = $1', [group.id, group.current_checkpoint + 1, false]);
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(13, user.lang)));
        sendClue(group.current_checkpoint + 1, 1, msg.chat.id, user.lang);
    }else if(!group.arrived && group.current_clue < 3){
        //case where the group is looking for the next checkpoint but hasn't got all the clues yet
        pool.query('UPDATE groups SET current_clue = $2 WHERE id = $1', [group.id, group.current_clue + 1]);
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(37, user.lang)));
        sendClue(group.current_checkpoint, group.current_clue + 1, msg.chat.id, user.lang);
    }else if(!group.arrived && group.current_clue == 3){
        //case when all the clues have been shown
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(14, user.lang)));
    }
    
});

//command to start the game
bot.onText(/\/begin (.+)/, async (msg, match) => {
    //get group data from user
    const group = await getGroupData(msg.chat.id);
    const user = await getUser(msg.chat.id);    

    if(user.group_id == null){
        bot.sendMessage(msg.chat.id, await getCorrectMessage(16, user.lang));
        return false;
    }

    //check whether the group has already started the game before
    if(group.current_checkpoint != 0){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(15, user.lang)));
        return false;
    }

    const message = await getCorrectMessage(6, user.lang)

    var fs  = require("fs");
    fs.readFile(`./instructions/${user.lang}/${group.current_checkpoint}.txt`, function(err, f){
        var array = f.toString().split('#');
        if(array[0].trim() != match[0].trim()){
            bot.sendMessage(msg.chat.id, message);
        }else{
            pool.query('UPDATE groups SET arrived = $2 WHERE id = $1', [group.id, true]);
            bot.sendMessage(msg.chat.id, array[1]);
        }
        
    });    
});

bot.onText(/\/begin$/, async (msg) => {
    //get group data from user
    const group = await getGroupData(msg.chat.id);
    const user = await getUser(msg.chat.id);    

    if(user.group_id == null){
        bot.sendMessage(msg.chat.id, await getCorrectMessage(16, user.lang));
        return false;
    }

    //check whether the group has already started the game before
    if(group.current_checkpoint != 0){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(15, user.lang)));
        return false;
    }
    
    bot.sendMessage(msg.chat.id, await getCorrectMessage(28, user.lang));
});

//command to tell user the amount of money the group has
bot.onText(/\/money/, async (msg) => {
    const group = await getGroupData(msg.chat.id);

    
    //get group's data
    if(!group){
        bot.sendMessage(msg.chat.id, await getCorrectMessage(16, user.lang));
        return false;
    }

    bot.sendMessage(msg.chat.id, `Your group currently has ${group.money} Otaloti!`);
});

//helper function to check file types of clues
function sendClue(checkpoint, clue, chat, lang) {
    var fs  = require("fs");
    const f = fs.readFileSync(`./clues/${lang}/${checkpoint}_${clue}.txt`).toString('utf-8');
    var array = f.split('#');
    if(array[0] == 'jpg'){
        bot.sendPhoto(chat, `./clues/pics/${checkpoint}_${clue}.jpg`);
        return true;
    }else if(array[0] == 'png'){
        bot.sendPhoto(chat, `./clues/pics/${checkpoint}_${clue}.png`);
        return true;
    }else if(array[0] == 'gif'){
        bot.sendDocument(chat, `./clues/pics/${checkpoint}_${clue}.gif`);
        return true;
    }else{
        bot.sendMessage(chat, `${array[0]}`);
        return false;
    }
}

//show current clue for the next checkpoint
bot.onText(/\/clue/, async (msg) => {
    const group = await getGroupData(msg.chat.id);
    const user = await getUser(msg.chat.id);

    if(!group){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(16, user.lang)));
        return false;
    }
    if(group.current_checkpoint == 0){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(17, user.lang)));
        return false;
    }
    if(group.current_checkpoint == end && group.arrived){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(18, user.lang)));
        return false;
    }
    if(group.arrived && group.completed){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(3, user.lang)));
        return false;
    }
    if(group.arrived){
        await sendInstruction(group, msg.chat.id);
        return false;
    }


    bot.sendMessage(msg.chat.id, (await getCorrectMessage(19, user.lang)));

    if(group.current_checkpoint == 13){
        bot.sendPhoto(msg.chat.id, './clues/pics/12.png');
    }

    for(i = group.current_clue; i > 0; i = i - 1){
        if(sendClue(group.current_checkpoint, i, msg.chat.id, user.lang)){
            break;
        }        
    }

    bot.sendMessage(msg.chat.id, (await getCorrectMessage(20, user.lang)));
    

});

bot.onText(/\/fly/, async (msg) => {
    const group = await getGroupData(msg.chat.id);
    const user = await getUser(msg.chat.id);

    if(!group){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(16, user.lang)));
        return false;
    }

    if(!group.arrived || !group.completed){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(21, user.lang)));
        return false;
    }

    if(!fly_points.includes(group.current_checkpoint)){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(21, user.lang)));
    }else if(group.money < 300){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(22, user.lang)));
    }else{
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(23, user.lang)));
        await pool.query('UPDATE groups SET arrived = $2, completed = $2, current_checkpoint = $3, money = $4, current_clue = 1 WHERE id = $1', [group.id, false, group.current_checkpoint + 2, group.money - 300]);
        sendClue(group.current_checkpoint + 2, 1, msg.chat.id, user.lang);
    }
});

bot.onText(/\/walk/, async (msg) => {
    const group = await getGroupData(msg.chat.id);
    const user = await getUser(msg.chat.id);

    if(!group){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(16, user.lang)));
        return false;
    }

    if(!fly_points.includes(group.current_checkpoint)){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(24, user.lang)));
    }else{
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(25, user.lang)));
        await pool.query('UPDATE groups SET arrived = $2, completed = $2, current_checkpoint = $3, current_clue = 1 WHERE id = $1', [group.id, false, group.current_checkpoint + 1]);
        sendClue(group.current_checkpoint + 1, 1, msg.chat.id, user.lang);
    }
    
});

bot.onText(/\/arrive (.+)/, async (msg, match) => {
    //check the format of the msg
    const cmd = match;    
    const givenpw = cmd[1].toUpperCase();

    //get current checkpoint and clue level of the group
    const group = await getGroupData(msg.chat.id);
    const user = await getUser(msg.chat.id);

    //don't let users spam arrive
    if(group.completed){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(3, user.lang)));
        return false;
    }

    const msg6 = (await getCorrectMessage(6, user.lang));
    const msg7 = (await getCorrectMessage(7, user.lang));

    var fs  = require("fs");
    fs.readFile(`./instructions/${user.lang}/${group.current_checkpoint}.txt`, function(err, f){
        var array = f.toString().split('#');

        if(givenpw != array[0].toUpperCase()){
            bot.sendMessage(msg.chat.id, msg6);
            return false;
        }

        if(array[2].trim() == 'jewel'){
            const jewel = getJewel();
            var money = 0;
            if(jewel.i != 0){
                bot.sendMessage(msg.chat.id, array[1].replace('*', jewel.i).replace("^", jewel.money));
                money = jewel.money;
            }else{
                bot.sendMessage(msg.chat.id, array[3]);
            }
            pool.query('UPDATE groups SET arrived = $2, completed = $2, money = $3 WHERE id = $1', [group.id, true, group.money + money]);
        }else if(array[2].trim() == 'diamond'){
            bot.sendMessage(msg.chat.id, array[1]);
            pool.query('UPDATE groups SET current_checkpoint = $3, current_clue = $4, arrived = $2, completed = $2 WHERE id = $1', [group.id, false, group.current_checkpoint + 1, 1]);
            bot.sendMessage(msg.chat.id, msg7);
            sendClue(group.current_checkpoint + 1, 1, msg.chat.id, user.lang);
        }else if(array[2].trim() == 'none'){
            bot.sendMessage(msg.chat.id, array[1]);
            pool.query('UPDATE groups SET current_checkpoint = $3, current_clue = $4, arrived = $2, completed = $2 WHERE id = $1', [group.id, false, group.current_checkpoint + 1, 1]);
            sendClue(group.current_checkpoint + 1, 1, msg.chat.id, user.lang);
        }else if(array[2].trim() == 'riddle'){
            bot.sendMessage(msg.chat.id, array[1]);
            pool.query('UPDATE groups SET current_checkpoint = $3, current_clue = $4, arrived = $2, completed = $2 WHERE id = $1', [group.id, false, group.current_checkpoint + 1, 1]);
            bot.sendPhoto(msg.chat.id, './clues/pics/12.png');
            sendClue(group.current_checkpoint + 1, 1, msg.chat.id, user.lang);
        }else{
            pool.query('UPDATE groups SET arrived = $2 WHERE id = $1', [group.id, true]);
            sendInstruction(group, msg.chat.id);
        }
    });

    if(group.current_checkpoint == end){
        pool.query('UPDATE groups SET completed = $2 WHERE id = $1', [group.id, true]);
        bot.sendPhoto(msg.chat.id, './finisher.png');
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(44, user.lang)));
    }
});

bot.onText(/\/prize$/, async (msg) => {
    const user = await getUser(msg.chat.id);
    if(!user){
        return false;
    }
    if(!user.group_id){
        bot.sendMessage(msg.chat.id, await getCorrectMessage(16, user.lang));
        return false;
    }
    const group = await getGroupData(msg.chat.id);
    if(group.current_checkpoint == 16 && group.completed){
        bot.sendPhoto(msg.chat.id, './finisher.png');
    }
});

bot.onText(/\/commands/, async (msg) => {
    const user = await getUser(msg.chat.id);
    bot.sendMessage(msg.chat.id, (await getCorrectMessage(41, user.lang)));
});

//arrive at new checkpoint and give pw
bot.onText(/\/arrive$/, async (msg) => {
    const user = await getUser(msg.chat.id);
    if(!user.group_id){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(16, user.lang)));
        return false;
    }
    const group = await getGroupData(msg.chat.id);
    if(group.current_checkpoint == 0 && !group.arrived){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(34, user.lang)));
        return false;
    }
    if(group.arrived){
        bot.sendMessage(msg.chat.id, (await getCorrectMessage(4, user.lang)));
        return false;
    }
    bot.sendMessage(msg.chat.id, (await getCorrectMessage(28, user.lang)));
});

bot.onText(/\/join$/, async (msg) => {
    const user = await getUser(msg.chat.id);
    bot.sendMessage(msg.chat.id, (await getCorrectMessage(27, user.lang)));
});

//change language
bot.onText(/\/lang/, async (msg) => {
    const user = await getUser(msg.chat.id);
    bot.sendMessage(msg.chat.id, `Remember that the clues will always be in English`);
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
            keyboard: [ ['Suomeksi'], ['På svenska'], ['In English'] ]
        }
    };
    bot.sendMessage(msg.chat.id, (await getCorrectMessage(26, user.lang)), opts);
});

//handlers to catch the different language buttons
{
bot.onText(/^Suomeksi$/, async (msg) => {
    await pool.query('UPDATE users SET lang = $2 WHERE userid = $1', [msg.chat.id, 'fi']);
    bot.sendMessage(msg.chat.id, "Puhun tästä eteenpäin suomea.", {reply_markup: {remove_keyboard: true}});
});
bot.onText(/^På svenska$/, async (msg) => {
    await pool.query('UPDATE users SET lang = $2 WHERE userid = $1', [msg.chat.id, 'sv']);
    bot.sendMessage(msg.chat.id, "Jag kommer att prata svenska från och med nu.", {reply_markup: {remove_keyboard: true}});
});
bot.onText(/^In English$/, async (msg) => {
    await pool.query('UPDATE users SET lang = $2 WHERE userid = $1', [msg.chat.id, 'en']);
    bot.sendMessage(msg.chat.id, "I will speak english from now on.", {reply_markup: {remove_keyboard: true}});
});
};

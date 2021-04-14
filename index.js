require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const { Pool } = require('pg')
const pool = new Pool()
const token = process.env.TGBOT_APIKEY;
const bot = new TelegramBot(token, {polling:true});

//for the groupcodes
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

//logging every msg for debug
bot.on('message', (msg) => {    
    console.log(msg)
});

//method to register a new group
bot.onText(/\/register/, (msg) => {
    //check if user is already registered
    pool.query('SELECT * FROM users WHERE userid = $1', [msg.chat.id], (err, res) => {
        if (err) {
            throw err;
        }

        
        if (res.rows.length > 0){
            bot.sendMessage(msg.chat.id, "You are already registered, no need to register again!");
        }else{ // if not then make a new group (and user)
            
            const groupcode = makeid();

            //insert groupcode into groups
            pool.query('INSERT INTO groups(groupcode, created_on) VALUES ($1, to_timestamp($2)) RETURNING *', [groupcode, (Date.now() / 1000.0)], (err, res) => {
                if (err) {
                    throw err;
                }

                const group_id = res.rows[0].id;

                //insert user into users and add them to the new group
                pool.query(`INSERT INTO users(userid, created_on, group_id) VALUES ($1, to_timestamp($2), $3) RETURNING *`, [msg.chat.id, (Date.now() / 1000.0), group_id], (err, res) => {
                    if (err) {
                        throw err;
                    }
    
                    bot.sendMessage(msg.chat.id, `Registered a new group, the join code is: ${groupcode}.`);
                });
            });

            
            
        }
    });    
});

//method to join an existing group
bot.onText(/\/join/, (msg) => {
    //check for correct format of the msg
    const cmd = msg.text.split(' ');
    if (cmd.length != 2){
        bot.sendMessage(msg.chat.id, `Make sure to use the format "/join XXXX"!`);
    }else{
        const givencode = cmd[1].toUpperCase();

        //check if group with given code exists
        pool.query('SELECT * FROM groups WHERE groupcode LIKE $1', [givencode], (err, res) => {
            if (err) {
                throw err;
            }
            
            if (res.rows.length === 0){
                bot.sendMessage(msg.chat.id, `Group with the given code does not exist: "${givencode}". Please check your spelling! If you want to create a new group you can do so with the /register command.`);
            }else{ // if it does then join the group
                const group_id = res.rows[0].id;

                pool.query('UPDATE users SET group_id = $1 WHERE userid = $2', [group_id, msg.chat.id], (err, res) => {
                    if (err) {
                        throw err;
                    }
                });
                
                bot.sendMessage(msg.chat.id, `Joined a new group with the code: ${givencode}`);            
            }
        });
    }
    
    
});
const { sendMessage } = require('../lib/message.functions');
const { config } = require('../lib/db.utils');

const mysql = require('mysql');

function getRandomMeal(callback) {
    // console.log(config);
    const conn = mysql.createConnection(config);
    conn.connect();
    conn.query('SELECT * FROM `meal_type` ORDER BY RAND() LIMIT 1', (err, res, next) => {
        return callback(res[0].name);
    })
    conn.end();
}

module.exports = {
    name: 'eat',
    description: 'eat',
    /**
     * 
     * @param {*} req.body
     */
    execute(body) {
        console.log('eat');
        getRandomMeal((result) => {
            meal_type = result;
            console.log(meal_type);
            sendMessage(body.message.chat.id, meal_type, null, true);
        });
    },
};
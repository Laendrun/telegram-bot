const { sendMessage } = require('../lib/message.functions');
// const fs = require('fs');
// const commandFiles = fs.readdirSync('./api/commands').filter(file => file.endsWith('.js'));
// const command_list = [];

// for (const file of commandFiles) {
//     const command = require(`../commands/${file}`);
//     command_list[command.name] = command;
// }

module.exports = {
    name: 'commands',
    description: 'commands',
    /**
     * 
     * @param {*} req.body
     */
    execute(body, commands) {
        let message = 'Here\'s a list of available commands :\n';

        for (const command in commands) {
            message += `/${command}\n`;
            console.log(`command: ${command}`)
        }
        sendMessage(body.message.chat.id, message, null, true);
    },
};
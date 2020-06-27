const { sendMessage } = require('../lib/message.functions');

module.exports = {
    name: 'start',
    description: 'start',
    /**
     * 
     * @param {*} req.body
     */
    execute(body) {
        const version = '0.1.0';
        const message = 'Who made this bot ? <a href="http://github.com/Laendrun" target="_blank">Laendrun</a>\n' +
            'Type /commands to get a list of available commands.\n' +
            `Version: ${version}`;

        sendMessage(body.message.chat.id, message, 'HTML', true);
    },
};
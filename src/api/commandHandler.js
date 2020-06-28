const fs = require('fs');
const { sendMessage, deleteMessage } = require('./lib/message.functions');
const { commandExists } = require('./lib/command.functions');
const commandFiles = fs.readdirSync('./api/commands').filter(file => file.endsWith('.js'));
const commands = [];

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands[command.name] = command;
}


exports.commandHandler = (req, res, next) => {
    const chat_id = req.body.message.chat.id;
    const entities = req.body.message.entities;
    const text = req.body.message.text;
    const message_id = req.body.message.message_id;

    // console.log(req.body);

    if (entities) {

        command = text.replace('/', '').trim();

        if (commandExists(command, commands)) {
            try {
                commands[command].execute(req.body, commands);
            } catch (error) {
                sendMessage(chat_id, `Erreur ${error}`);
            }
        } else {
            sendMessage(chat_id, `command does not exist`);
        }

        res.status(200).json({
            method: '',
        })
    } else {
        sendMessage(chat_id, `I can't understand "${text}", try with a / before maybe`);
        deleteMessage(chat_id, message_id);
        res.stauts(200).json({
            method: '',
        })
    }
}
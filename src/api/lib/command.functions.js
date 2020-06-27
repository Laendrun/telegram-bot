// const { commands } = require('../commands.json');

function commandExists(command, commands) {

    return command in commands;

}

module.exports = {
    commandExists,
}
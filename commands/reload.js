const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return utils.timed_msg(utils.no_perm(`${message.author}, you do have the permissions to run this command!`))

    let command = args[0];
    if (!command) return utils.timed_msg(utils.cmd_fail('Please enter a command to reload!', `${config.prefix}reload <command>`))

    let response = await bot.unloadCommand(command);
    if (response) return [message.channel.send(), utils.timed_msg(response)];

    response = bot.loadCommand(command);
    if (response) return [message.channel.send(), utils.timed_msg(response)];

    return [message.channel.send(), utils.timed_msg(`Command ${command} has been reloaded successfully!`)];
};

module.exports.help = {
    name: 'reload',
    aliases: []
};
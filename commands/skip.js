const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    let votes = bot.votes.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.channel.send(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}skip`))];
    if (!queue) return [message.channel.send(), utils.timed_msg('⚠ No musics are being played.')];

    return queue.connection.dispatcher.end();
};

module.exports.help = {
    name: 'skip',
    aliases: []
};
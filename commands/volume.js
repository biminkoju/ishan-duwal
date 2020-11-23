const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.channel.send(), utils.timed_msg('⚠ No musics are being played.')];
    
    if (!args[0]) return [message.channel.send(), message.channel.send(`🎵 Current Volume: **${queue.volume}/100**`)];
    if (isNaN(args[0])) return [message.channel.send(), utils.timed_msg(utils.cmd_fail(`${message.author}, please input a volume between 0 and 100 only!`, `${config.prefix}volume <volume>`))];
    if (args[0] < 0 || args[0] > 100) return [message.channel.send(), utils.timed_msg(utils.cmd_fail(`${message.author}, please input a volume between 0 and 100 only!`, `${config.prefix}volume <volume>`))];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 Volume has now been set to **${queue.volume}/100**`);
};

module.exports.help = {
    name: 'volume',
    aliases: ['vol']
};
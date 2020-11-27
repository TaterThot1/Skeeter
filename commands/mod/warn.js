    const Discord = require('discord.js');
    const { Command } = require('discord.js-commando');
module.exports = class WarnCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'warn',
			aliases: ['warn'],
			group: 'mod',
			memberName: 'warn',
			description: 'warn a user.',
		});
	}
    run(message, client) {
    const { prefix,
        logName,
    } = require('../../config.json');
    const log = message.guild.channels.cache.find(ch => ch.name === logName);
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
    if (!message.member.hasPermission("MANAGE\_MEMBER")) return message.reply("You can't use that command!");
    if (!dUser) return message.channel.send("Can't find user!");
    let reason = args.join(" ").slice(27);
    if (reason.length < 1) return message.reply('what is the reason???');

    dUser.send(`${dUser}, You have been warned for${reason} in the server ${message.guild.name}`);

    return message.channel.send(`${dUser} has been warned for${reason} :thumbsdown:`)
 			.then(() => log.send({embed: {color: '#FF0000', title: 'Warn Log', description: `${dUser} has been warned for ${reason}.`}}));
	}
};

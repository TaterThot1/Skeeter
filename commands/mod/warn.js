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
    const { prefix} = require('../../config.json');
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
    if (!message.member.hasPermission("MANAGE\_MEMBER")) return message.reply("You can't use that command!")
    if (!dUser) return message.channel.send("Can't find user!")
    let dMessage = args.join(" ").slice(22);
    if (dMessage.length < 1) return message.reply('what is the reason???')

    dUser.send(`${dUser}, You have been warned for doing ${args[2]} in the server ${message.guild.name}`)

    message.channel.send(`${dUser} has been warned for doing ${args[2]} :thumbsdown:`)
	}
};

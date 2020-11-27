const Client = require('../../client/Client');
const Discord = require('discord.js');
const getUserFromMention = require('../../util/getUser');
    const { Command } = require('discord.js-commando');
module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kick',
			aliases: ['kick'],
			group: 'mod',
			memberName: 'kick',
			description: 'kick a user.',
		});
	}
    run(message, client) {
       const { prefix,
           logName,
            } = require('../../config.json');
       const log = message.guild.channels.cache.find(ch => ch.name === logName);
       const Discord = require('discord.js');
       const args = message.content.slice(prefix.length).trim().split(/ +/);
       let reason = args.join(" ").slice(27);
       if (reason.length < 1) return message.reply('what is the reason???');
       const tuser = message.guild.member(message.mentions.users.first());
       const user = message.mentions.users.first();
        if (!user) {
			return message.reply('No member was mentioned.');
		}
        if (!message.member.hasPermission("kickMembers")) {
			return message.reply('You dont have the correct perms to use this command');
		}
		return tuser.kick(reason)
			.then(() => log.send({embed: {color: '#FF0000', title: 'Kick Log', description: `${user} has been kicked.`}}));
	}
};

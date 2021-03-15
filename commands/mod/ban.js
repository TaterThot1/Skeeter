const Client = require('../../client/Client');
const Discord = require('discord.js');
const getUserFromMention = require('../../util/getUser');
const { Command } = require('discord.js-commando');
module.exports = class BanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			aliases: ['ban'],
			group: 'mod',
			memberName: 'ban',
			description: 'ban a user.',
		});
	}
    run(message, client) {
	    	const mod = message.member.user;
		const member = message.mentions.users.first();
	    	const args = message.content.slice(prefix.length).trim().split(/ +/);
       		let reason = args.join(" ").slice(26);
       		if (reason.length < 1) return message.reply('what is the reason???');

		if (!member) {
			return message.reply('No member was mentioned.');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('I am unable to ban this user.');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`${mod} has banned ${member.username} for ${reason}`))
			.catch(error => message.reply('Sorry, an error has unfortunately occured.'));
    }
};
  clientPerms: {
    guild: ['banMembers']
  }
  userPerms: {
    guild: ['kickMembers']
  }
  disableDM: true

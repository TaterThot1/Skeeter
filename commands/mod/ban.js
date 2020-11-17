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
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = message.mentions.users.first();

		if (!member) {
			return message.reply('No member was mentioned.');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('I am unable to ban this user.');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`Banned ${member.username}`))
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

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
       const Discord = require('discord.js')
       const tuser = message.guild.member(message.mentions.users.first());
       const user = message.mentions.users.first();
        if (!user) {
			return message.reply('No member was mentioned.');
		}
        if (!message.member.hasPermission("kickMembers")) {
			return message.reply('You dont have the correct perms to use this command');
		}
		return tuser.kick(user)
			.then(() => message.reply(`Kicked ${user.username}`));
	}
};
  clientPerms: {
    guild: ['banMembers']
  }
  userPerms: {
    guild: ['kickMembers']
  }
  disableDM: true

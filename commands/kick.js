const Client = require('../client/Client');
const Discord = require('discord.js');
const getUserFromMention = require('../util/getUser');
module.exports = {
	name: 'kick',
	description: 'kick a user.',
    execute(message, client) {
       const Discord = require('discord.js')
       const tuser = message.guild.member(message.mentions.users.first());
       const user = message.mentions.users.first();
        if (!user) {
			return message.reply('No member was mentioned.');
		}

		return tuser.kick(user)
			.then(() => message.reply(`Kicked ${user.username}`));
	},
};
  clientPerms: {
    guild: ['banMembers']
  }
  userPerms: {
    guild: ['kickMembers']
  }
  disableDM: true
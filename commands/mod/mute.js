const Client = require('../../client/Client');
const Collection = require('../../node_modules/discord.js/src/util/Collection.js')
const Discord = require('discord.js');
const getUserFromMention = require('../../util/getUser');
const { Command } = require('discord.js-commando');
module.exports = class MuteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mute',
			aliases: ['mute'],
			group: 'mod',
			memberName: 'mute',
			description: 'Mute user.',
		});
	}
    async run(message, client) {
          let member = message.mentions.members.first();
          let roleName1 = 'Muted';
                          //If yout mute role is named something else put it here
          let mute = message.guild.roles.cache.find(x => x.name === roleName1);
          let roleName2 = 'Main_Role1';
                          //Replace Main_Role1 with roles that have perms in chats
          let remove1 = message.guild.roles.cache.find(x => x.name === roleName2);
          let roleName3 = 'Main_Role2';
                            //If you have any other main roles rember to list them along with the line below
          let remove2 = message.guild.roles.cache.find(x => x.name === roleName3);
		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('I am unable to mute this user.');
		}

        member.roles.add(mute);
        member.roles.remove(remove1);
        member.roles.remove(remove2);
        //each time you add a main role remeber to add another member.roles.remove line to remove them
        return message.reply(`muted ${member}`);
    }
};
//if @everyone has the perm to type or speak the command wont work

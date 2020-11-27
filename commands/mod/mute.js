const Client = require('../../client/Client');
const Collection = require('../../node_modules/discord.js/src/util/Collection.js');
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
    run(message, client) {
        const { prefix, logName, roleName1, roleName2, roleName3, roleName4, } = require('../../config.json');
          const log = message.guild.channels.cache.find(ch => ch.name === logName);
          let member = message.mentions.members.first();
          let mute = message.guild.roles.cache.find(x => x.name === roleName1);
          let remove1 = message.guild.roles.cache.find(x => x.name === roleName2);
          let remove2 = message.guild.roles.cache.find(x => x.name === roleName3);
          let remove3 = message.guild.roles.cache.find(x => x.name === roleName4);
		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('I am unable to mute this user.');
		}
          const args = message.content.slice(prefix.length).trim().split(/ +/);
       	  let reason = args.join(" ").slice(27);
     		if (reason.length < 1) return message.reply('what is the reason???');

          let ismuted = member.roles.cache.some(role => role.name === roleName1);
       		if (ismuted) return message.reply(`sorry but ${member} is already muted`);
        		member.roles.add(mute);
        		member.roles.remove(remove1);
        		member.roles.remove(remove2);
        		member.roles.remove(remove3);
          return message.reply(`muted ${member}`)
		.then(() => log.send({embed: {color: '#FF0000', title: 'Mute Log', description: `${member} has been muted for ${reason}.`}}));
    }
};
//if @everyone has the perm to type or speak the command wont work

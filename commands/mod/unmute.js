const Client = require('../../client/Client');
const Collection = require('../../node_modules/discord.js/src/util/Collection.js');
const Discord = require('discord.js');
const getUserFromMention = require('../../util/getUser');
const { Command } = require('discord.js-commando');
module.exports = class UnmuteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unmute',
			aliases: ['unmute'],
			group: 'mod',
			memberName: 'unmute',
			description: 'Unmute user.',
		});
	}
    run(message, client) {
        const { prefix,
        logName,
        roleName1,
        roleName2,
         } = require('../../config.json');
           const log = message.guild.channels.cache.find(ch => ch.name === logName);
          let member = message.mentions.members.first();
          let mute = message.guild.roles.cache.find(x => x.name === roleName1);
          let add1 = message.guild.roles.cache.find(x => x.name === roleName2);
		            if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			            return message.reply('I am unable to unmute this user.');
		            }
          const args = message.content.slice(prefix.length).trim().split(/ +/);
          let reason = args.join(" ").slice(29);
                if (reason.length < 1) return message.reply('what is the reason???');
          let ismuted = member.roles.cache.some(role => role.name === roleName1);
                if (!ismuted) return message.reply(`sorry but ${member} isnt muted`);

                      member.roles.add(add1);
                      member.roles.remove(mute);
          return message.reply(`unmuted ${member}.`)
	            .then(() => log.send({embed: {color: '#FF0000', title: 'Mute Log', description: `${member} has been unmuted for ${reason}.`}}));
    }
};

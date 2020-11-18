    const Client = require('../../client/Client');
    const Discord = require('discord.js');
    const getUserFromMention = require('../../util/getUser');
    const { Command } = require('discord.js-commando');
module.exports = class AnnounceCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'announce',
			aliases: ['announce'],
			group: 'misc',
			memberName: 'announce',
			description: 'Announcement.',
		});
	}
   async run(message, client) {
       const { prefix} = require('../../config.json');
       const Discord = require('discord.js')
       const tuser = message.guild.member(message.mentions.users.first());
       const user = message.mentions.users.first();
       const args = message.content.slice(prefix.length).trim().split(/ +/);
       let say = args.join(" ").slice(8);
       if (say.length < 1) return message.reply('what is the message???')
       const announce = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Announcement')
	.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ format: "png", dynamic: true })}`)
	.setDescription(`${say}`)
	.setTimestamp()
	.setFooter('Thank You');
  message.channel.send('@everyone')
  message.channel.send(announce)
	}
};

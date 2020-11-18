    const Client = require('../../client/Client');
    const Discord = require('discord.js');
    const getUserFromMention = require('../../util/getUser');
    const { Command } = require('discord.js-commando');
module.exports = class ShipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ship',
			aliases: ['ship'],
			group: 'misc',
			memberName: 'ship',
			description: 'ship members.',
		});
	}
   async run(message, client) {
       const { prefix} = require('../../config.json');
       const Discord = require('discord.js')
       const user = message.mentions.users.first(2);
       const announce = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${Math.floor(Math.random() * 100) + 1}% Chance`)
	.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ format: "png", dynamic: true })}`)
	.setDescription(`${user} were shipped `)
	.setTimestamp()
	.setFooter('Resulting Satisfaction May Vary');
  message.channel.send(announce)
	}
};

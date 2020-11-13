const fs = require('fs')
const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'List of commands.',
	execute(message) {
		let str = '';
        const help = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Command List')
	.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ format: "png", dynamic: true })}`)
	.setDescription('Prefix %')
    .addFields(
		{ name: 'ban' , value: 'Ban a member'},
        { name: 'kick' , value: 'Kick a user'},
		{ name: 'purge' , value: 'Delete the last messages sent in chats.'},
        { name: 'userinfo' , value: 'Get information about a user.'},
        { name: 'warn' , value: 'warn a user. separate your reason with ( - ) or ( _ ) '},
	)
	.setTimestamp()
	.setFooter('Help');

message.channel.send(help)
	}
};

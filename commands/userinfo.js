const Client = require('../client/Client');
const Discord = require('discord.js');
const getUserFromMention = require('../util/getUser');
module.exports = {
	name: 'userinfo',
	description: 'Get information about a user.',
    execute(message, client) {
       const Discord = require('discord.js')
       const tuser = message.guild.member(message.mentions.users.first());
       const user = message.mentions.users.first();
       const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('User Info')
	.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ format: "png", dynamic: true })}`)
	.setDescription(`${user.username}`)
	.setThumbnail(`${user.displayAvatarURL({ format: "png", dynamic: true })}`)
    .addFields(
		{ name: 'Joined', value: `${tuser.joinedAt}` },
        { name: 'Account Creation Date', value: `${user.createdAt}`},
		{ name: 'User Id', value: `${user.id}`, inline: true },
	)
	.setTimestamp()
	.setFooter(`${user.tag}`);

message.channel.send(exampleEmbed)
	}
};

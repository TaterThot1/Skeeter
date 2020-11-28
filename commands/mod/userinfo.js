const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
module.exports = class InfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'userinfo',
			aliases: ['userinfo'],
			group: 'mod',
			memberName: 'userinfo',
			description: 'info about user.',
		});
	}
    async run (message) {
       const { guild, channel } = message
       const { staffRole } = require('../../config.json');
       const user = message.mentions.users.first() || message.member.user
       const member = guild.members.cache.get(user.id)
       let rolemap = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(" ");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
       const Embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('User Info')
	.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ format: "png", dynamic: true })}`)
	.setDescription(`${user.username}`)
	.setThumbnail(`${user.displayAvatarURL({ format: "png", dynamic: true })}`)
    .addFields(
		{ name: 'Joined', value: `${member.joinedAt}` },
        { name: 'Account Creation Date', value: `${user.createdAt}`},
		{ name: 'User Id', value: `${user.id}`},
        { name: 'Is Staff?' , value: `${member.roles.cache.some(role => role.name === staffRole)}`, inline: true },
        { name: 'Role Count', value: `${member.roles.cache.size}`, inline: true },
        { name: 'Is Bot?' , value: `${user.bot}`, inline: true },
		{ name: 'Role List', value: `${rolemap}`},
	)
	.setTimestamp()
	.setFooter(`${user.tag}`);

message.channel.send(Embed)
	}
};

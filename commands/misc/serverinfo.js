const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
module.exports = class ServerInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'serverinfo',
			aliases: ['serverinfo'],
			group: 'misc',
			memberName: 'serverinfo',
			description: 'info about the server.',
		});
	}
    async run (message) {
       const { guild, channel } = message;
       let rolemap = guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join("");
            if (rolemap.length > 1024) rolemap = "Sorry but there is too many roles to display";
            if (!rolemap) rolemap = "Error: no roles found";
       const Embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Server Info')
	.setAuthor(`Server Acromyn- ${message.guild.nameAcronym}`)
	.setDescription(`${message.guild.name}`)
	.setThumbnail(`${message.guild.iconURL({ format: "png", dynamic: true })}`)
    .addFields(
		{ name: 'Member Count', value: `${message.guild.memberCount}` },
		{ name: 'Creation Date', value: `${message.guild.createdAt}` },
        { name: 'Boost Level', value: `${message.guild.premiumTier}`},
		{ name: 'Guild Id', value: `${message.guild.id}`},
		{ name: 'Roles', value: `${rolemap}`}
		)
	.setTimestamp()
	.setFooter('Info');

message.channel.send(Embed);
	}
};

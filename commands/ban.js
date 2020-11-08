const { getUserFromMention } = require('../utility/getUser')

module.exports = {
	name: 'ban',
	description: 'Ban a member',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);

		if (!member) {
			return message.reply('No member was mentioned.');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('I am unable to ban this user.');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`${member.username} was banned.`))
			.catch(error => message.reply('Sorry, an error has unfortunately occured.'));
	},
};

const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'A list of commands.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `~%${command.name}
${command.description}: \n`;
		}

		message.channel.send(str);
	},
};


module.exports = {
	name: 'purge',
	description: 'Delete the last messages sent in chats 2-100.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Please provide the number of messages to delete. (max 100)')
		}
        
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			return message.reply('You dont have the correct perms to use this command');
		}
		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Specify an amount, between 2 and 100, to delete.');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Messages where not deleted: ${error}`));
	},
};

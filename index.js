const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const Client = require('./client/Client');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
console.log(client.commands);

client.once('ready', () => {
	console.log('Ready!');
});
client.once('ready', () => {
    console.log('Succesfully Set Presence')
    client.user.setActivity('Moderators', {type: "LISTENING"})

});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});
client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if(commandName == "ban" || commandName == "userinfo") {
			command.execute(message, client);
		} else {
			command.execute(message);
		}
	} catch (error) {
		console.error(error);
		message.reply('An error has occured, please try again later.');
	}
});


client.login('Your_Bot_Token');
//Your bot token goes here

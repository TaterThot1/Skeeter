const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '%',
	owner: 'Your_Id', //put your id here
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['mod', 'Moderation Commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
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

client.on('error', console.error);

client.login('Your_Bot_Token'); //put your bot token here

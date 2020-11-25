const fs = require('fs');
const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '%',
	owner: 'Your_Id',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['mod', 'Moderation Commands'],
		['misc', 'Miscellaneous Commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
});
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'Welcome_Channel_Name');
  const log = member.guild.channels.cache.find(ch => ch.name === 'Log_Channel_Name');
  if (!channel) return;
  channel.send({embed: {color: '#FFFF00', title: 'Goodbye', description: `${member}, Sorry to see you go.`}})
  if (!log) return;
  log.send({embed: {color: '#FFFF00', title: 'Leave Log', description: `${member} left the server.`}})
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'Welcome_Channel_Name');
  const log = member.guild.channels.cache.find(ch => ch.name === 'Log_Channel_Name');
  if (!channel) return;
  channel.send({embed: {color: '#74FF00', title: 'Hello', description: `${member}, Welcome to the server`}})
  if (!log) return;
  log.send({embed: {color: '#74FF00', title: 'Join Log', description: `${member} Joined the server on ${member.joinedAt}`}})
});

client.on("guildBanAdd", function (guild, user) {
  const channel = guild.channels.cache.find(ch => ch.name === 'Welcome_Channel_Name');
  const log = guild.channels.cache.find(ch => ch.name === 'Log_Channel_Name');
  if (!channel) return;
  channel.send({embed: {color: '#FF0000', title: 'Oof!!', description: `${user}, Got the wrong end of the ban hammer.`}})
  if (!log) return;
  log.send({embed: {color: '#FF0000', title: 'Ban Log', description: `${user} was banned from the server.`}})
console.log(`a member is banned from a guild`);
});

client.on("guildBanRemove", function (guild, user) {
  const channel = guild.channels.cache.find(ch => ch.name === 'Welcome_Channel_Name');
  const log = guild.channels.cache.find(ch => ch.name === 'Log_Channel_Name');
  if (!channel) return;
  channel.send({embed: {color: '#00FBFF', title: 'Oof!!', description: `${user}, has been unbanned, so dont fuck it up again.`}})
  if (!log) return;
  log.send({embed: {color: '#00FBFF', title: 'Ban Log', description: `${user} was unbanned from the server.`}})
console.log(`a member is unbanned from a guild`);
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

client.login(token);


// on line 9 change 'Your_ID' with your account id.
// on lines 26, 35, 44, and 54 change 'Welcome_Channel_Name' with the name of your welcome channel.
// on lines 27, 36, 45, and 55 change 'Log_Channel_Name' with the name of your log channel.

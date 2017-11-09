const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "j."
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'hello')) {
	
		 message.channel.send(`Hello @${message.author.username}! :wave:`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(`You need a little help with the commands:`);
	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


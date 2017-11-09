const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send('Pong! \`${Date.now() - message.createdTimestamp} ms\`');
	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


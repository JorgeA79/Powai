const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "with real Jorge", type: 0}});
});

var prefix = "j."
var answers = [
  "https://www.google.com.mx/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjkzsvFx7LXAhXEKGMKHWu6CKAQjRwIBw&url=http%3A%2F%2Fknowyourmeme.com%2Fphotos%2F1217729-roll-safe&psig=AOvVaw2ubpfGUvc0qgXUHG7A6msC&ust=1510353542295026"
"http://o.aolcdn.com/hss/storage/midas/37e0050ee936a68e680564854b0c7fb5/201853233/putinmeme02.jpg"	
]

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'hello')) {
	
		 message.channel.send(`Hello ${message.author.username}! :wave:`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dbs')) {
	
		 message.channel.send(`Oof the previous episode of Dragon Ball Super was :ok_hand:`);
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'xd')) {
	
		 message.channel.send(`XD`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'killme')) {
	
		var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
		 message.channel.send(randomAnswer);
});
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
	
		 message.channel.send(`Hey i cant join your server you know because i am a bot XD, but you can add me to your server in here:\nhttps://discordapp.com/api/oauth2/authorize?client_id=372862753154793472&scope=bot&permissions=1`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(`${message.author.username} need a little helps with the commands, there you go:\n **j.hello**\n **j.dbs**\n **j.xd**\n **j.invite**\n **j.ping**`);
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


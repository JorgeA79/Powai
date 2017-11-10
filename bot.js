const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "with real Jorge", type: 0}});
});

var prefix = "j."
var answers = [
   "You got a **Bulbasaur**, meh just a common mon :neutral_face: ",
  "You got an **Ivysaur**, meh just a common mon :neutral_face:",
  "You got a **Venasaur**, Damn thats rare :hushed: ",
  "You got a **Charmander**, meh just a common mon :neutral_face: ",
  "You got a **Charmeleon**, meh just a common mon :neutral_face:",
  "You got a **Charizard**, Damn thats rare :hushed: ",	
  "You got a **Squirtle**, meh just a common mon :neutral_face: ",
  "You got a **Wartortle**, meh just a common mon :neutral_face:",
  "You got a **Blastoise**, Damn thats rare :hushed: ",
  "You got a **Cartepie**, what a shitty mon :expressionless: ",
  "You got a **Metapod**, what a shitty mon :expressionless:",
  "You got a **Buterfree**, oof an uncommon mon :rolling_eyes:  ",
  "You got a **Weedle**, what a shitty mon :expressionless: ",
  "You got a **Kakunaa**, what a shitty mon :expressionless:",
  "You got a **Beedrill**, oof an uncommon mon :rolling_eyes:  ",
  "You got a **Pidgey**, what a shitty mon :expressionless: ",
  "You got a **Pidgeotto**, meh just a common mon :neutral_face:",
  "You got a **Pidgeot**, oof an uncommon mon :rolling_eyes:  ",
  "You got a **Rattata**, what a shitty mon :expressionless: ",
  "You got a **Raticate**, meh just a common mon :neutral_face:",
  "You got a **Rattata**, what a shitty mon :expressionless: ",
  "You got a **Raticate**, meh just a common mon :neutral_face:"
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
	if (message.content.startsWith(prefix + 'mon')) {
		
	var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
		 message.channel.send(randomAnswer);
		
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


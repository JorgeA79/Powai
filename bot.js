const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "with Jorge | j.help", type: 0}});
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
	if (message.content.startsWith(prefix + 'ssj')) {
	
	
const embed = new Discord.RichEmbed()

  .setTitle("AAAAAAAAAAAAAAAAAAAAAAAAAH")

  .setColor(0xF7FE2E)
  .setImage("https://media.giphy.com/media/3o6fJ1DYT1w2mvZyE0/giphy.gif")


  message.channel.send({embed});
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'wait')) {
		

		 message.channel.send(`Wait\nWait\nWait `);
		
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
	
		 message.channel.send(`${message.author.username} you need a little help with the commands, there you go:\n **j.hello**\n **j.dbs**\n **j.ssj**\n **j.xd**\n **j.wait**\n **j.invite**\n **j.ping**`);
	}
});

//Mach Mirror Pokedex
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex ghoulantern')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Ghoulantern #251")
  .setAuthor("ArceusTube", "https://cdn.discordapp.com/avatars/350101239364714508/14cf7783293a82caf8655b81bf60add5.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This Pokemon is known to be a ghostly spirit that guides other ghost Pokemon and humans. It is rumored that Ghoulanterns are supposedly dead souls of the Firebreathers that roamed the Mirren region.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380467848193114122/unknown.png")
 .addField("Ghost/Fire.", true)
  .setTimestamp()
  message.channel.send({embed});
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


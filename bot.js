const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
message.reply('pong');
        
client.on('message', message => {
    if (message.content === '.r1') {
message.reply('Be respectful to everyone. All discussions should be kept civil and polite.');
        
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

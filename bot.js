const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var commands = {
  1: 'Hello',
    2: 'xd'
};

client.on('message', message => {
    if (message.content.substr(0, 1) !== '.') {
        return;
    }
    for (var i in commands) {
        if (message.content === '.' + commands[i]) {
            break;
        }
    }
    message.reply(commands[i]);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

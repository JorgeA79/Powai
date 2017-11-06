const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var commands = {
    hello: 'hello!',
    xd: 'xd',
    uvuvuvuvuvuvuvu: 'I dont understand can you repeat!! :hushed:'
};

client.on('message', message => {

        if (message.content === '.' + commands[i]) {
            break;
        }
    }
    message.reply(commands[i]);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
message.reply('pong');
        
  	}
});

client.on('message', message => {
    if (message.content === '.r1') {
message.reply('Be respectful to everyone. All discussions should be kept civil and polite.');
        	}
});


client.on('message', message => {
    if (message.content === '.r2') {
message.reply('No NSFW/R18+ content please.');
        	}
});

client.on('message', message => {
    if (message.content === '.r3') {
message.reply('No usage of any slurs that will cause offence to others.');
        	}
});
    
client.on('message', message => {
    if (message.content === '.r4') {
message.reply('Profanity is fine. However, avoid using it in excess to the point it makes other members feel uncomfortable.');
        	}
});
        
client.on('message', message => {
    if (message.content === '.r5') {
message.reply('Keep ALL discussions in the relevant channel they best belong to.');
        	}
    });

        
client.on('message', message => {
    if (message.content === '.r6') {
message.reply('This is an exclusively English server. Phrases in other languages or occasional chit-chat in your native is acceptable, but keep it to a limit the only exceptions being the dedicated language rooms.');
        	}
    });

client.on('message', message => {
    if (message.content === '.r7') {
message.reply('Refrain from shitposting in this server.');
        	}
    });

client.on('message', message => {
    if (message.content === '.r8') {
message.reply('Usage of nicknames is permitted in this server. Please do not use any offensive nicknames or denote titles in brackets (i.e [Vice-Captain]) in your nickname. These rules are subject to change at any point of time when deemed fit. If you have any concerns, questions, or suggestions, you can always contact a moderator via use of @Mods  or by messaging any of them privately.');
        	}
    });

client.on('message', message => {
    if (message.content === '.FaQ1') {
message.reply('For CFW please use https://3ds.guide/');
        	}
    });

client.on('message', message => {
    if (message.content === '.help') {
message.reply('The command explanations are pinned in #faq-room.');
        	}
});

client.on('message', message => {
    if (message.content === '.info') {
message.reply('This bot was created for the Galaxy Translation server.');
        	}
});

client.on('message', message => {
    if (message.content === '.progress') {
message.reply('Please check #updates.');
        	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

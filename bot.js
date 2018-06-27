const Discord = require('discord.js');
const client = new Discord.Client()

client.on('Ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.contest === 'ping') {
      message.rely('pong');
    }
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

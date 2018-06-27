const Discord = require('discord.js');
const client = new Discord.Client()

client.on('Ready', () => {
    console.log('I am ready!');
    client.user.setActivity("With ${client.users.size} Users")
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

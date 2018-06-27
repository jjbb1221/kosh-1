const Discord = require('discord.js');
const Client = new Discord.client();

client.on('Ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.contest === 'ping') {
      message.rely('pong');
    }
});

//THIS MUST BE THIS WAY
client.login(process.env.NDYxNTQ3MDExNDU2MzY4NjQw.DhVF5Q.TG46BJfWPr2Mnh6v3AW9tRH2nvo);

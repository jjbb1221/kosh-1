const Discord = require('discord.js');
const client = new Discord.Client()

client.on('Ready', () => {
    console.log('[Kosh_PROCESS] [KOSH_BOT] ONLINE');
 client.user.setPresence({ game: { name: 'Serving ${client.guilds.size} servers', type: 1 } });
});


//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = ("$")
client.on("ready", () => {
    console.log("[KOSH_PROCESS] [KOSH_BOT] Online!")
    client.user.setActivity("Serving ${client.guilds.size} servers")
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2MTU0NzAxMTQ1NjM2ODY0MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTMwMzcwNDYzfQ.cO3EqFi97Sn1XY8LTkxE_PTjhYD4MrkjEIEhweRm2N8', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

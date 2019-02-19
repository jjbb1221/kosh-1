const Discord = require("discord.js")
const client = new Discord.Client();
const Version = "1.0"
const prefix = (";")
client.on("ready", () => {
client.user.setPresence({ game: { name: "Hey! ;Cmds", type: "WATCHING" } });
console.log('[BC7] [PROCESS] FREIND BOT Online')
});
const Authorized = ("LightBoltex")
/////////////////////////////////////////////////////////
client.on('message', message => {
	if (message.author.id === "372091741123248139") {
		let msg = message.content;

		if (msg.startsWith("%eval")) {
   		msg = msg.substring("%eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "Eval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
//////////////////////////
client.on('message', message => {
	if (message.author.id === "372091741123248139") {
		let msg = message.content;

		if (msg.startsWith("%eval")) {
   		msg = msg.substring("%eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "Eval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
///////////////////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "botinfo")) {
        let bicon = client.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#6100ff")
        .setThumbnail(bicon)
        .addField("Bot Name", client.user.username)
        .addField("Created On", client.user.createdAt);
    
        return message.channel.send(botembed);
      }
});
///////////////////////
client.on('message', message => {	
    if (message.content === prefix +'verify') {	
        message.channel.sendMessage('Welcome to our USA! You are now verified on our database.')
    }	
    });	
///////////////////////
client.on('message', message => {	
    if (message.content === prefix +'cmds') {	
        message.channel.sendMessage('Commands: ;verify, ;ping, ;support, ;botinfo, ;start, ;stats. More on the way!')
    }	
    });	
///////////////////////
client.on('message', message => {
    if (message.content === prefix +'ping') {
        message.channel.sendMessage('**Bringing the ball**')
        .then(msg => {
          msg.edit(`:ping_pong: Pong! (It took: :signal_strength: ${msg.createdTimestamp - message.createdTimestamp}ms to bring the ball!) **Websocket:** ${client.ping}`);
        });
    };
});
///////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "start")) {
        message.channel.sendMessage("Thank you for joining [USA] :| United States of America discord! Run ;support for help.");				
    }
    });
    ////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "support")) {
        message.channel.sendMessage("USA Support Hotline: Run serverstats, requesthelp, or donate to continue.");
}
    if (message.content.startsWith("requesthelp")) {
        message.channel.sendMessage("Sent request... If nobody is online ask someone who is online!");
}	
    if (message.content.startsWith("donate")) {
        message.channel.sendMessage("Donate by buying an idem in the #store channel!");
}
    if (message.content.startsWith("serverstats")) {
        message.channel.send(`= STATISTICS =
      • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
      • Node       :: ${process.version}`, {code: 'asciidoc'});
    }
    });
    /////////////////////
    client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
        message.channel.send(`= STATISTICS =
      • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
      • Node       :: ${process.version}`, {code: 'asciidoc'});
    }
    });
    //////////////////
    client.on('message', message => {
    if (message.content.startsWith(prefix + "kick")) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
    //!kick @Twisted Reason

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You thought!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Sike! I ain't kicking that user.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kicks");
    if(!kickChannel) return message.channel.send("Can't find kicks channel.");




    return;
  }
}
);
///////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "startup")) {
	    let kickChannel = message.guild.channels.find(`name`, "announcements").send("Hello! I am the new USA Bot created by LightBoltex. Run ;start to begin! :joy:");
	}
	})
    //////////////
client.login(process.env.TOKEN)
    ///////

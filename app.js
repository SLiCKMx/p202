const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

var database = JSON.parse(fs.readFileSync('userData.json', 'utf8'));

client.on('ready', () => 
{
    console.log('Burgerbotz ready! :3');
});

function randomize(min, max) 
{
	return Math.floor(Math.random() * (max - min)) + min;
}


const prefix = "/";
const helpTab = "```/coinflip - Flips a coin\n/dm - Sends DM to a user\n/help - Shows this help screen\n/ping - Pong\n/post - Posts a message\n/random - Generates a random number\n/rape - Rapes a user\n/s - Spits on grave```";

client.on('message', message => 
{
    function post(String)
		{
			message.channel.send(String);
			return 0;
		}
		
		let sender = message.author;
	
		if(sender === client.user) return;
		
		if(!database[sender.id]) database[sender.id] =
		{
			burgers: 1000
		}
		
		let user = message.mentions.users.first();
		let target = message.guild;
		
		var msg0 = message.content.split(' ');
		delete msg0[0];
		var arg = msg0.join(" ");
		
		var msg = message.content.toLowerCase();
		const args = msg.slice(prefix.length).trim().split(/ +/g);
		
		const command = args.shift().toLowerCase();
		
		switch(command)
		{
			case "help":
				post("***__Burgerbotz Commands__***\n" + helpTab);
				break;
			
			case "s":
				var x = randomize(0, 5);
				if(x > 1)
				{
					post(`${message.author}` + " has spitted on" + arg + "'s grave :purple_heart:");
				} else {
					post(`${message.author}` + " has took a shit on" + arg + "'s grave :poo:");
				}	
				break;
				
			case "ping":
				post("***PONG!*** Returned request in " + (Date.now() - message.createdTimestamp) + " ms");
				break;
					
			case "random":
				if(args[0] == null)
				{
					post("Correct usage: /random <upper bound>");
				} else {
					var x = parseInt(args[0]);
					post("Returned integer " + Math.floor(Math.random() * x));
				}
				break;
					
			case "coinflip":
				var x = Math.floor(Math.random() * 2);
				if(x === 0)
				{
					message.reply("you got heads");
				} else {
					message.reply("you got tails");
				}
				break;
					
			case "rape":
				if(message.mentions.users.size < 1)
				{
					message.reply("please specify a user to *rape*!");
				} else {
					message.channel.send(`${user} has been brutally sodomized by ${message.author}`, {files: ["https://img.4plebs.org/boards/sp/image/1405/27/1405279865972.gif"]});
				}
				break;
					
			case "dm":
				if(message.mentions.users.size < 1)
				{
					message.reply("please specify a user to message.");
				} else {
					delete msg0[1];
					var msg1 = msg0.join(" ");
					user.send(msg1);
				}
				break;
			
			case "post":
				post(arg);
				break;
				
			case "burgers":
				if(message.mentions.users.size < 1)
				{
					message.reply("you have " + database[sender.id].burgers + " :hamburger:");
				} else {
					if(!database[user.id]) database[user.id] = {burgers: 1000};
					fs.writeFile('userData.json', JSON.stringify(database), (err) =>
					{
						if(err) throw err;		
					});
					post(user.username + " has " + database[user.id].burgers + " :hamburger:");
				}
				break;
				
			case "burger":
				if(message.mentions.users.size >= 1)
				{
					if(database[sender.id].burgers > 1)
					{
						if(!database[user.id])
						{
							post("bar");
							database[user.id] = {burgers: 1000};
						}
					
						database[user.id].burgers += 1;
						database[sender.id].burgers -= 1;
						fs.writeFile('userData.json', JSON.stringify(database), (err) =>
						{
							if(err) throw err;		
						});
						post("Given a burger to user " + user.username);
					} else {
						message.reply("you don't have enough burgers!");	
					}
				} else {
					post("You have to mention someone to give a burger to");	
				}

	}
});

client.login(process.env.BOT_TOKEN);

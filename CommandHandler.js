const Discord = require('discord.js');
const fs = require('fs');

var database = JSON.parse(fs.readFileSync('userData.json', 'utf8'));

function randomize(min, max) 
{
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = 
{
	post: function(channel, arg) 
	{
        	if(arg.length > 1)
		{
			return channel.send(arg);
		} else {
			return channel.send("Correct usage: /post <message>");
		}
	},
	
	rape: function(channel, message, arr)
	{
		if(message.mentions.users.size < 1)
		{
			return message.reply("please specify a user to *rape*!");
		} else {
			let x = randomize(0, arr.length);

			let botembed = new Discord.RichEmbed()
			.setImage(arr[x])
			.setDescription(`**${message.mentions.users.first().username}** has been brutally sodomized by **${message.author.username}**`)
			.setColor("#fcc66a");
				
			return message.channel.send(botembed);
		}
	},
	
	nigger: function(channel, message)
	{
		var user = message.mentions.users.first();
		
		if(message.mentions.users.size < 1)
		{
			return message.reply("you have to mention someone to calculate the niggerness of!");
		} else {
			var result = randomize(0,100);
			if(!database[user.id]) database[user.id] = {nigger: result};
			
			if(database[user.id].nigger == null)
			{
				database[user.id] = {nigger: result};
			}
				
			var n = database[user.id].nigger;
					
			if(n >= 0 && n < 30)
			{
				return channel.send("<:dindu:454150474619289602> ***__Niggerator X3000__*** <:dindu:454150474619289602>\n\n:bar_chart: **" + user.username + "** : **" + database[user.id].nigger + "%**\n*Green flag! This person shows little to no signs of being a nigger.*");
			} else if(n >= 30 && n < 50) {
				return channel.send("<:dindu:454150474619289602> ***__Niggerator X3000__*** <:dindu:454150474619289602>\n\n:bar_chart: **" + user.username + "** : **" + database[user.id].nigger + "%**\n*This person could be a nigger for all we know, even though it's unlikely. Be safe!*");	
			} else if(n >= 50 && n < 75) {
				return channel.send("<:dindu:454150474619289602> ***__Niggerator X3000__*** <:dindu:454150474619289602>\n\n:bar_chart: **" + user.username + "** : **" + database[user.id].nigger + "%**\n*Be careful! This person is very likely to be a nigger! Utter not the forbidden word for your own sake!*");	
			} else {
				return channel.send("<:dindu:454150474619289602> ***__Niggerator X3000__*** <:dindu:454150474619289602>\n\n:bar_chart: **" + user.username + "** : **" + database[user.id].nigger + "%**\n*This person is almost undoubtedly a nigger.* :watermelon:**OOGA BOOGA DINDU NUFFIN!!1**:basketball:");	
			}
		}	
	}
};

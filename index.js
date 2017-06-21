const Discord = require("discord.js");
const YTDL = require('ytdl-core');

var servers = {};


function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(YTDL(server.queue[0], {fliter: "audionly"}));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

const bot = new Discord.Client();

	bot.login("MzI1MjczMzg2MTA2MjI0NjUx.DCV19w.lyFnsdmY0pNoAzkjXBwbqJYHr_s");

	bot.on("ready",() => {
		console.log("Im ready");
		bot.user.setGame("$help" + " | on " + bot.guilds.size + " Servers","https://www.twitch.tv/v5bz","Server Deafen");
	});

	bot.on("message", message => {

		var PREFIX = "$";
		let args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
		case "play":
			if (!args[1]) {
				message.channel.sendMessage("Please provide a link");
				return;
			}
			if (!PREFIX) {
				return;
				message.reply("xD");
			}

			if (!message.member.voiceChannel) {
					message.channel.sendMessage("You must be in a voice channel");
				return;
			}

			if (!servers[message.guild.id]) servers[message.guild.id] = {
				queue: []
			}

			var server = servers[message.guild.id];

			server.queue.push(args[1]);

			if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
				play(connection, message);
			});
			break;
			case "skip":
			var server = servers[message.guild.id];

			if(server.dispatcher) server.dispatcher.end();
				break;

				case "stop":
					var server = server = servers[message.guild.id];

					if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
					break;
	}
	    if (message.content === "$server") {
 var servername = message.guild.name;
var serverowner = message.guild.owner;
var memberCount = message.guild.memberCount;
var id = message.guild.id;
var region = message.guild.region;
var channels = message.guild.channels.size;
var roles = message.guild.roles;
var createdAt = message.guild.createdAt;
var verificationLevel = message.guild.verificationLevel;
var defaultChannel = message.guild.defaultChannel;
    const server = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`)         
    .setFooter(`Serverinfo`, 'https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL29yY2lkLm9yZy9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZpbGVzL0lEX3N5bWJvbF9CLVdfMTI4eDEyOC5naWYifQ.3eVENDULyHD6upQs1cla4xdsMtY')

          .setColor(0x00AE86)
                          .addField('|- رقم الشــخصي الخاص بـ السيرفر ',`**(${message.guild.id})**`)
                          .addField('|- الشات الأساسي في السيرفر',`**${message.guild.defaultChannel}**`, true)
                          .addField('|- عدد اعضاء السيرفر',`**[${memberCount}]**`)
                          .addField('|- عدد الرومات الموجودة في السيرفر',`**[${message.guild.channels.size}]**`, true)
                          .addField('|- صاحب السيرفر',`**${message.guild.owner}**`)
                          .addField('|- تاريخ افتتاح السيرفر',`**${message.guild.createdAt}**`)
      message.channel.sendEmbed(server)
}

	}); 	

bot.on("guildMemberAdd", member => {
	member.createDM().then(function (channel) {
  return channel.sendEmbed(wlcm);
}).catch(console.error)

	let wlcm = new Discord.RichEmbed()
	.setTitle("Welcome to the server " + member.guild.name)
	.setColor("F3FADA")
	.setDescription("https://discordapp.com/oauth2/authorize?client_id=325273386106224651&scope=bot&permissions=21469585910")
	.setColor("CD00FF")
});

   bot.on('message', message => {

});

      bot.on('message', message => {
     if (message.content === "$bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#9B59B6")
  .addField("عــدد الســيرفــرات الموجود فيها البوت" , bot.guilds.size)
     
     
     
  message.channel.sendEmbed(embed);
    }
});

     /*    bot.on('message', message => {
     if (message.content === "$avatar") {
      const embed = new Discord.RichEmbed()
 
  .setColor(0x00AE86)
  .addField(message.author.avatarURL  ,'.  ')
  .setImage(message.author.avatarURL ,'  .')
      
 message.channel.sendEmbed(embed);
 
 } else { 
 	var mentionned = message.mentions.users.first();
 	if (mentionned) {
 	var men = mentionned;
 }
 	let avt = new Discord.RichEmbed()
 	.setTitle(`${men.username}'s Avatar`)
 	.setDescription(`${men.avatarURL}`)
 	.setImage(`${men.avatarURL}`)
 	.setColor("F48FAC")
 	message.channel.sendEmbed(avt);
    }
    if (!mentionned) {
    	const embed1 = new Discord.RichEmbed()
 
  .setColor(0x00AE86)
  .addField(message.author.avatarURL  ,'.  ')
  .setImage(message.author.avatarURL ,'  .')
      
 message.channel.sendEmbed(embed1);
    } 
});*/ 
        bot.on('message', message => {
     if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`', ` .`)
  
  message.channel.sendEmbed(embed);
    }
});

bot.on('message', message => {
  if (true) {
if (message.content === '$info') {
            message.delete()
      message.author.send('https://discord.gg/mnzF7U8 | ✨ سيرفر الخاص بالدعم للبوت ').catch(e => console.log(e.stack));
      message.author.send('🔎 | لأضافة البوت ف سيرفرك | https://discordapp.com/oauth2/authorize?&client_id=322513671597064192&scope=bot&permissions=1544027136 ').catch(e => console.log(e.stack));

    }
   }
   if (message.content == "السلام عليكم") 
   {
   	message.reply("وعليكم السلام");
   } 
   if (message.content == "باك") 
   {
   	message.reply("ولكم");
   }
   if (message.content == "برب") 
   {
   	message.reply("تيت");
   }  
  });
       bot.on('message', message => {
      	let args = message.content.split(" ").slice(1);
     if (message.content === "$embed") {
      if (!args[1])
								{
									let err = new Discord.RichEmbed()
									.setTitle("خطأ انت لم تضع كلمه للبوت")
									.setDescription("الاستخدام : $say {الرساله}")
									.setColor("f84hf")
									message.channel.sendEmbed(err); 
								} else {	
								let sayz = new Discord.RichEmbed()
								.setTitle(message.author.username + " يقول")
								.setColor("008FFF")
     							.setDescription(args[1])
     							message.delete();
    							message.channel.sendEmbed(sayz);
    }
}
});
      bot.on('message', message => {
     if (message.content === "$inv") {
      let inv = new Discord.RichEmbed()
							.setTitle("هذا الرابط")
							.setDescription("https://discordapp.com/oauth2/authorize?client_id=325273386106224651&scope=bot&permissions=2146958591")
							message.author.sendEmbed(inv);
							let inv2 = new Discord.RichEmbed()
							.setTitle("نتشرف بأضافه بوتنا الى سيرفرك")
							.setDescription("https://discordapp.com/oauth2/authorize?client_id=325273386106224651&scope=bot&permissions=2146958591")
							.setColor("00FF1B")
							message.channel.sendEmbed(inv2);
    }
});
      bot.on('message', message => {
      let args = message.content.split(" ").slice(1);
     if (message.content === "$purge") {
      if (!args[1]) {
								let embed3 = new Discord.RichEmbed()
								.setDescription(":x: Please add an number to delete")
								.setColor("FFFF00")
								message.channel.sendEmbed(embed3);
							} else {
							let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));

                            let embed4 = new Discord.RichEmbed()
									.setDescription("Purged " + args[1] + " messages")
								message.channel.sendEmbed(embed4);
							}
    }
});
      bot.on('message', message => {
     if (message.content === "$help") {
      let help = new Discord.RichEmbed()
							.addField("لوحه المساعده", `  **
:wrench:					سهل الاستخدام
:wrench:					اضافه الموسيقى
:wrench:					يرسل ترحيب تلقائي للعضو الجديد
:wrench:					للاضافه البوت في سيرفرك اكتب $inv :heart:
						------------------------------------
:gear:				$embed يكرر الكلام بطريقه جميله
:gear:				$help للاضهار المساعده
:gear:				$inv للاضافه البوت في سيرفرك
:gear:				$server يظهر معلومات السيرفر
:gear:				$play ثم الرابط ليقوم بتشغيل الاغنيه المطلوبه
:gear:				$id لم يجهز بعد !
:gear:				$avatar قيد التعديل !
:gear:				$ping سرعه الاتصال
:gear:				$info يرسل لك رابط ضافه البوت مع السيرفر
						------------------------------------
**`)
							       .addField("مصمم البوت", `**    
🛠 DBS team 
🛠 Bader

**`)
							       .setAuthor("طلب بواسطه : " + message.author.username)
							.setColor("00FFFB")
							message.channel.sendEmbed(help);
    }
});
     /* bot.on("message", message => {
   if(message.content == "avatar"){
   var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
          message.channel.send(`${getvalueof.username}'s Avatar\n${getvalueof.avatarURL}`);
      }

}   
});*/
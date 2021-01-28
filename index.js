const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const bot = new Discord.Client;

const prefix = "!";

    bot.on("ready" , () =>{
    console.log("bot visio oppérationnel");
    bot.user.setActivity("son cours" , {type : 'WATCHING'});
    });


    bot.on("message" , message => {

        if(message.content.startsWith(prefix + "visio")){
        message.reply("fait ton choix : ");
            var embed2 = new Discord.MessageEmbed()
            .setColor("#F9EAC3")
            .setTitle("Réagis au message!!")
            .addField("0️⃣","LIFASR2")
            .addField("1️⃣","LIFAP2")
            .addField("2️⃣","LIFAMI")
            .addField("3️⃣","FDM2")
            .setDescription("Bon courage")
        message.channel.send(embed2)
            .then(message => {
        message.react('0️⃣');
        message.react('1️⃣');
        message.react('2️⃣');
        message.react('3️⃣');
            bot.on('messageReactionAdd', (reaction, user) => {
            
              if (reaction.emoji.name === "0️⃣" && user.id !== bot.user.id) {
                var embedlifa = new Discord.MessageEmbed()
                .setColor("#FDFD96")
                .setTitle("LIFASR2")
                .addField("CM","https://univ-lyon1.webex.com/webappng/sites/univ-lyon1/meeting/download/1336091ee6594cf889fc0bbf8e8755b3?siteurl=univ-lyon1&MTID=me21dff31cc9f133afe576f4b33a36dfe")
            message.channel.send(embedlifa);
                }
                if (reaction.emoji.name === "1️⃣" && user.id !== bot.user.id) {
                    var embedlifa = new Discord.MessageEmbed()
                    .setColor("#FDFD96")
                    .setTitle("LIFAP2")
                    .addField("CM","pas a jour ")
                message.channel.send(embedlifa);
                    }
                    if (reaction.emoji.name === "2️⃣" && user.id !== bot.user.id) {
                        var embedlifami = new Discord.MessageEmbed()
                        .setColor("#FDFD96")
                        .setTitle("LIFAMI")
                        .addField("CM" ,"pas a jour")
                    message.channel.send(embedlifami);
                        }

                        if (reaction.emoji.name === "3️⃣" && user.id !== bot.user.id) {
                            var embedfdm = new Discord.MessageEmbed()
                            .setColor("#FDFD96")
                            .setTitle("FDM2")
                            .addField("CM","https://univ-lyon1-fr.zoom.us/j/2330623990")
                        message.channel.send(embedfdm);
                            }
    
            })
        })
    }
});
    

bot.login("ODA0MzQxNzYwMTQ2Mjc2NDIz.YBK7ow.4hXaLe4d5VLDfElHyG3BJ4-2VoU");
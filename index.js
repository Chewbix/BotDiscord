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
                .addField("💂","Anglais")
                .setDescription("Bon courage")
            message.channel.send(embed2)
                .then(message => {
            message.react('0️⃣');
            message.react('1️⃣');
            message.react('2️⃣');
            message.react('3️⃣');
            message.react("💂");
                bot.on('messageReactionAdd', (reaction, user) => {
                
                if (reaction.emoji.name === "0️⃣" && user.id !== bot.user.id) {
                    var embedlifa = new Discord.MessageEmbed()
                    .setColor("#FDFD96")
                    .setTitle("LIFASR2")
                    .addField("CM","https://univ-lyon1.webex.com/webappng/sites/univ-lyon1/meeting/download/1336091ee6594cf889fc0bbf8e8755b3?siteurl=univ-lyon1&MTID=me21dff31cc9f133afe576f4b33a36dfe")
                    .addField("TP","https://classe-info.univ-lyon1.fr/jea-y7c-1ut-bxt")
                message.channel.send(embedlifa);
                    }
                    if (reaction.emoji.name === "1️⃣" && user.id !== bot.user.id) {
                        var embedlifa = new Discord.MessageEmbed()
                        .setColor("#FDFD96")
                        .setTitle("LIFAP2")
                        .addField("CM","pas a jour ")
                        .addField("TD","https://classe-info.univ-lyon1.fr/per-uzk-58g-eik")
                    message.channel.send(embedlifa);
                        }
                        if (reaction.emoji.name === "2️⃣" && user.id !== bot.user.id) {
                            var embedlifami = new Discord.MessageEmbed()
                            .setColor("#FDFD96")
                            .setTitle("LIFAMI")
                            .addField("CM" ,"pas a jour")
                            .addField("TD elodie","https://univ-lyon1.webex.com/meet/elodie.desseree")
                            .addField("TP Basile Fraboni","https://classe-info.univ-lyon1.fr/fra-o1k-kci-ors")
                        message.channel.send(embedlifami);
                            }

                            if (reaction.emoji.name === "3️⃣" && user.id !== bot.user.id) {
                                var embedfdm = new Discord.MessageEmbed()
                                .setColor("#FDFD96")
                                .setTitle("FDM2")
                                .addField("CM","https://univ-lyon1-fr.zoom.us/j/2330623990")
                            message.channel.send(embedfdm);
                                }
                                if (reaction.emoji.name === "💂" && user.id !== bot.user.id) {
                                    var embedangl = new Discord.MessageEmbed()
                                    .setColor("#FDFD96")
                                    .setTitle("Anglais")
                                    .addField("CM","https://univ-lyon1.webex.com/univ-lyon1/k2/j.php?MTID=t64b36a9ce2af4d65a73be8b46c9668ca")
                                message.channel.send(embedangl);
                                    }
        
                })
            })
            }
            if(message.content.startsWith(prefix + "h")){
                message.reply("fait ton choix : ");
                var embed = new Discord.MessageEmbed()
                .setColor("#F9EAC3")
                .setTitle("Réagis au message!!")
                .addField(":clock1:","Lundi")
                .addField(":clock3:","Mardi")
                .addField(":clock6:","Mercredi")
                .addField(":clock8:","Jeudi")
                .addField(":clock11:","Vendredi")
                .setDescription("Bon courage")
            message.channel.send(embed)
                .then(message => {
                    message.react('🕐');
                    message.react('🕒');
                    message.react('🕕');
                    message.react('🕖');
                    message.react('🕚');
                    bot.on('messageReactionAdd', (reaction, user) => {
                        if (reaction.emoji.name === "0️⃣" && user.id !== bot.user.id) {
                            var embedlifa = new Discord.MessageEmbed()
                            .setColor("#FDFD96")
                            .setTitle("LIFASR2")
                            .addField("CM","https://univ-lyon1.webex.com/webappng/sites/univ-lyon1/meeting/download/1336091ee6594cf889fc0bbf8e8755b3?siteurl=univ-lyon1&MTID=me21dff31cc9f133afe576f4b33a36dfe")
                            .addField("TP","https://classe-info.univ-lyon1.fr/jea-y7c-1ut-bxt")
                        message.channel.send(embedlifa);
                                }
                            })
                })      
            }
});


bot.login(process.env.TOKEN);
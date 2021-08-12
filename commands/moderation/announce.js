const { Command } = require('discord.js-commando')
const Discord = require('discord.js');



module.exports = class announceCommand extends Command {
    constructor(client) {
        super(client, {
            name:"announce",
            group: 'moderation',
            memberName: 'announce',
            guildOnly: true,
            userPermissions: ['ADMINISTRATOR'],
            description: 'Announces a message to the server',
            args: [
                {
                    type:"string",
                    prompt:"What would you like the title to be?",
                    key:"title",
                },
                {
                    type:"string",
                    prompt:"What would you like the description to be?",
                    key:"desc",
                },
                {
                    type:"string",
                    prompt:"What's your username?",
                    key:"moderator",
                }
            ]
        })
    }
    run(msg, { title, desc, moderator }) {
  // reading content to be announced
  
  // the embed 
  const announceEmbed = new Discord.MessageEmbed()
    .setColor("#ff1233")
    .setTitle(title)
    .setFooter("Announcement by " + moderator)
    .setDescription(desc);

    // add more embed configs if you like
  msg.channel.send(announceEmbed);
}
}




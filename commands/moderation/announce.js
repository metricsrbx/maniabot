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
                },
                {
                    type:"string",
                    prompt:"What channel shall this be sent?",
                    key:"chanel",
                }
            ]
        })
    }
    run(msg, { title, desc, moderator, chanel}) {
        
  
    }
}




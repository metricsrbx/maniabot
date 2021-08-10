const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class unbanCommand extends Command {
    constructor(client) {
        super(client, {
            name:"unban",
            group: 'moderation',
            memberName: 'unban',
            guildOnly: true,
            userPermissions: ['BAN_MEMBERS'],
            description: 'Unbans a user.',
            args: [
                {
                    type:"user",
                    prompt:"Which user would you like to unban?",
                    key:"user",
                }
            ]
        })
    }
    run(msg, { user }) {
        
        if (msg.guild.member(user).hasPermission('ADMINISTRATOR')) return msg.reply('I can not unban this user, he has higher permission than I do.')
        if (!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply('I need the permission `BAN_MEMBERS` for this to work.')
        
        guild.bans.fetch()
  .then(console.log)
  .catch(console.error);
        guild.bans.removemember(user)
        msg.say('Successfully unbanned ' + user)
    }
}
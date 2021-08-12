const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const bot = new Discord.Client();
module.exports = class uptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name:"uptime",
            group: 'misc',
            memberName: 'uptime',
            description: 'Sends the bots uptime',
		});
	}
	run(msg) {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds / 60;
        msg.channel.send(`:low_brightness: **Uptime:** ${days} days, ${hours} hours and ${minutes} mins`)
        
}}

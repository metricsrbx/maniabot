const { Command } = require('discord.js-commando');

module.exports = class memberCountCommand extends Command {
    constructor(client) {
        super(client, {
            name:"memcount",
            aliases: ["member", "members"],
            group: 'misc',
            memberName: 'membercount',
            description: 'Counts the total server members.',
		});
	}
	run(msg) {
     msg.say(`There are **__${msg.member.guild.memberCount}__** members in **__${msg.member.guild.name}__**`);
}
	};
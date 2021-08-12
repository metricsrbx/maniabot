const commando = require('discord.js-commando');
require('dotenv').config();
const path = require('path');
const noblox = require('noblox.js');
const { Guild } = require('discord.js');
const client = new commando.Client({
	owner: '827986018027307060',
	commandPrefix: ';',
	invite: 'https://discord.gg/ZWx9hJt7rE',
    unknownCommandResponse: true,
});

const config = require("./config.json");
const { time } = require('console');

client
	.on('error', console.error)
	.on('warn', console.warn)
	.on('debug', console.log)
	.on('guildMemberAdd', member => {
		var channel= member.guild.channels.find("name", "CHANNEL_NAME"); 
		  let embed = new Discord.RichEmbed()
			.setAuthor(`${member.guild.name}`)
			.setColor(`RANDOM`)
			.addField('Welcome', `Hi ${member} welcome to ${member.guild.name}`)
				.setFooter(`We now have ${member.guild.memberCount} users`)
				.setTimestamp();
			return;  
	})
	.on("ready", () => {
		console.log(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	  });

	  
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

client.setProvider(
    sqlite.open({ filename: 'database.db', driver: sqlite3.Database }).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.registry
.registerGroups([
    ['moderation', 'moderation'],
    ['misc', 'misc']
])
.registerDefaults()
	.registerTypesIn(path.join(__dirname, 'types'))
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.login('');
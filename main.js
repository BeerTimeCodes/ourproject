const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler', 'help_commands_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODM5NjI1Nzg3NTM1NjU0OTcy.YJMYcw.p3NkfIx-pOEAxwtxR_3Y1L0n2ho')
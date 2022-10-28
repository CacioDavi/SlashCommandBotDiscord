const {Client, SlashCommandBuilder, GatewayIntentBits} = require('discord.js');
const { Player } = require('discord-player')
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
})

const config = require('./config/config.json');
const token = config.token
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})
client.on('ready', () =>{
    const loadSlashCommands = require('./slashLoadCommands')
    loadSlashCommands.run(client)
    client.application.commands.create({})
    console.log(`✅ ${client.user.username} está online ✅`);
    
})



client.on('interactionCreate', async(interaction) =>{
    
    let dir = interaction.commandName
    let handle = require('./handle')
    return handle.run(client, interaction, dir)
    
})

client.login(token)
const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
module.exports = {
    Data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Informações sobre mim!'),

    run: async(client, interaction) =>{
        
        let ping = client.ws.ping
        let embed = new EmbedBuilder()
            .setTitle(`❔ **BotInfo** ❔`)
            .setDescription(`Meu Nome: ${client.user.username};\n
            Meu criador: Cdsb 120 #8607;\n
            Discord do criador: https://discord.gg/etK3ndYP3R;\n
            Meu Ping: ${ping} ms;\n
            Estou Online há: ${client.uptime} milissegundos;
            `)
            .setColor("Random")
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            
        interaction.editReply({content:'', embeds:[embed], ephemeral: true})

    }}
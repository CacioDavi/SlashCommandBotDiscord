const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
module.exports = {
    Data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Revela qual o meu ping atual'),

    run: async(client, interaction) =>{

        let ping = client.ws.ping;

        let embed = new EmbedBuilder()
            .setTitle(`Meu ping agora é:`)
            .setDescription(`**${ping} ms**`)
            .setColor('Random')

        interaction.editReply({content:'', embeds:[embed], ephemeral: true})

    }}
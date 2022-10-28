const search = require('yt-search')
const { QueryType } = require('discord-player')
const { EmbedBuilder } = require('discord.js')

module.exports = {

run: async(client, interaction, value) =>{
    
    let queue = client.player.getQueue(interaction.guild)
    if(!interaction.member.voice.channel) interaction.editReply({content: 'entre em um canal de voz!'})
    else if(interaction.member.voice.channel){
        if(!queue){
            queue = await client.player.createQueue(interaction.guild)
        }
        if(!value) interaction.editReply({content:'escolha uma música primeiro.'})
        else{
            let song = (await search(value)).videos[0]
            if (!queue.connection) await queue.connect(interaction.member.voice.channel)

            const result = await client.player.search(song.url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_VIDEO
            })
            const songtrack = result.tracks[0]
            await queue.addTrack(songtrack)

        if (!queue.playing){
            let embed = new EmbedBuilder()
                .setTitle(song.title)
                .setDescription(`${song.description}\n ${song.author}`)
                .setThumbnail(song.image)
                .setTimestamp()
                .setColor('Random')
                .addFields({name: 'Requested by:', "value": `${interaction.member.user.tag}`})
            let cmd = require('../../../utilidade/button.js')
            await cmd.run(interaction, ['⏯'], ['pp'], 1)
            await queue.play()
            await interaction.editReply({
                embeds:[embed]
            })
    }
    }
}}}
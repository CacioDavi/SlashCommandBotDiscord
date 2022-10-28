const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')


let createButton = (label, customId) =>{
    let row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId(customId)
                .setLabel(label)
                .setStyle(ButtonStyle.Primary)
        )
    return row;
}



module.exports = {
    run: async(interaction, textButtons, customIds, quant) => {
        let rows = []
        for(var i=0; i<=quant;i++){
            rows.push(createButton(textButtons[i], customIds[i]))
            //console.log(rows)
        }
        interaction.editReply({components: rows})
    }
}






/*let row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('00')
                .setLabel('play')
                .setStyle(ButtonStyle.Primary)
        )*/
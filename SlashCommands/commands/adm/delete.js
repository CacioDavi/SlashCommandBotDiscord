const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
module.exports = {
    Data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('apaga mensagens em massa!')
        .addStringOption(option => option.setName('quantidade')
        .setDescription('olá eu vou apagar esta quantidade')),

    run: async(client, interaction) =>{
        let quantidade = interaction.options.get('quantidade').value
        
        let embed1 = new EmbedBuilder()
            .setTitle(`✅ **Foram deletadas ${quantidade} menssagens com sucesso!!!** ✅`)
            .setDescription('As mensagens foram deletadas,\n Você já pode fechar esta janela.')
            .setColor('Random')
        
            let embed2 = new EmbedBuilder()
            .setTitle(`❎  Ops!!! ❎`)
            .setDescription(`o limite do Discord é de até 100 mensagens e não de: ${quantidade}`)
            .setColor('Random')

            let embed3 = new EmbedBuilder()
            .setTitle(`❎  Ops!!! ❎`)
            .setDescription(`Delete pelo menos 1 mensagem`)
            .setColor('Random')

        if(quantidade <= 100) {
            if(quantidade > 0){
                interaction.channel.bulkDelete(quantidade, 2)
                interaction.editReply({content:'', embeds:[embed1], ephemeral: true})
            }
            if(quantidade > 100){
                interaction.editReply({content:'', embeds:[embed2], ephemeral: true})
            }
            if(quantidade == 0){interaction.editReply({content:'', embeds:[embed3], ephemeral: true})}
        }

        }
    }

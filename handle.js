const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const path = require('path')

let execute = async(dir, client, interaction) => {
    try{
        if(interaction.isButton() == true){
            
            
            fs.readdir('./SlashCommands/buttonInteraction', (err, files) => {
                if (err)
                  console.log(err);
                else {
                  files.forEach(file => {
                    if (path.extname(file) == ".js"){
                        if(file.includes(interaction.customId)){
                            let cmd = require(`./SlashCommands/buttonInteraction/${file}`)
                            cmd.run(interaction, client)
                        }
                    }
                  })
                }
              })

        }else{
            const reply = (await interaction.reply({
                content: `${client.user.username} está pensando...`,
                ephemeral: true
            }))
            let cmdName = interaction.options._subcommand
            let value = interaction.options._hoistedOptions[0].value
            let cmd = require(`./SlashCommands/${dir}/${cmdName}`)
            cmd.run(client, interaction, value)
        }
    }catch(err){
        interaction.editReply({
            content:'o comando solicitado é inválido ou inexistente novos comandos serão adicionados em breve',
            ephemeral:true
    })}
}

module.exports = {
    run: async(client, interaction, dir) => {
        execute(dir, client, interaction)
        console.debug(`Comando: ${interaction.commandName}\nRequest:\n  Tag: ${interaction.member.user.tag}\n  ID: ${interaction.member.id}\nisButton: ${interaction.isButton()}\ncustomID: ${interaction.customId}\n`)
    }
}
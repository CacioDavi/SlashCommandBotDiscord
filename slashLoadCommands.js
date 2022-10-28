const fs = require("fs")

module.exports = {
    run: async(client) => {
        //client.application.commands.create()
        
        let dirs = fs.readdirSync('./SlashCommands/commands')
        
        dirs.forEach(dir => {
            
            fs.readdir(`./SlashCommands/commands/${dir}`, (err, files) => {
                if(err){
                    console.log(err)
                }else if(!err){
                    let info = require(`./SlashCommands/commands/${dir}/${files}`)
                    info.data
                }
            })
            
            //client.application.commands.create({name: file})
          });
          
    }
}
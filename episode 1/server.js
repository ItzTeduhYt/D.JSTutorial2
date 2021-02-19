let Discord = require('discord.js') 
let client = new Discord.Client()

client.login(process.env.TOKEN) // go to Discord Developer for Token

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`) // For Check bot is ready
})

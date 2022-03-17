const { Client } = require('yuuko') // Imports the Client constructor
const path = require('path') // For joining paths
require('dotenv').config() // Imports the variables in the `.env` file

const bot = new Client({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  ignoreBots: true
})

const gamedigType = process.env.GAMEDIG_TYPE
const gamedigHost = process.env.GAMEDIG_HOST
const gamedigPort = process.env.GAMEDIG_PORT

bot.extendContext({
  variableOne: 'Variable number 1!'
})
bot.editStatus('online') // edits bot status

bot.on('error', (err) => {
  console.error(err)
})

bot.globalCommandRequirements = {
  guildOnly: true
}

bot
  .addDir(path.join(__dirname, 'commands'))
  .addDir(path.join(__dirname, 'events'))
  .connect()

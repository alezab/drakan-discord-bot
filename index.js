const { Client } = require('yuuko') // Imports the Client constructor
const path = require('path') // For joining paths
require('dotenv').config() // Imports the variables in the `.env` file
const getServerData = require('./utils/getServerData.js')
const gamedigType = process.env.GAMEDIG_TYPE
const gamedigHost = process.env.GAMEDIG_HOST
const gamedigPort = process.env.GAMEDIG_PORT

const bot = new Client({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  ignoreBots: true
})

bot.extendContext({
  variableOne: 'Variable number 1!'
})

getServerData(gamedigType, gamedigHost, gamedigPort).then((state) => {
  // bot.editStatus('online')
  if (state == null) {
    console.log('Bot status: server offline')
    bot.editStatus('dnd')
  } else {
    const map = state.map
    const players = state.players.length
    const maxPlayers = state.maxplayers
    bot.editStatus('online', { name: `${players}/${maxPlayers} | ${map}`, type: 0 })
  }
})

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

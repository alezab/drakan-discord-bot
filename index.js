const { Client } = require('yuuko') // Imports the Client constructor
const path = require('path') // For joining paths
require('dotenv').config() // Imports the variables in the `.env` file
const getServerData = require('./utils/getServerData.js')
const Gamedig = require('gamedig')
const { Console } = require('console')
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

setInterval(() => {
  // query your game server
  Gamedig.query({
    type: gamedigType,
    host: gamedigHost,
    port: gamedigPort
  }).then((state) => {
    if (state == null) {
      console.log('Bot status: server offline')
      bot.editStatus('dnd')
    } else {
      const map = state.map
      const players = state.players.length
      const maxPlayers = state.maxplayers
      bot.editStatus('online', { name: `${players}/${maxPlayers} | ${map}`, type: 0 })
    }
  }).catch((error) => {
    console.log('Server is offline')
    bot.editStatus('dnd')
  })
}, 10000)

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

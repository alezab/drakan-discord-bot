const { MessageEmbed, Command } = require('yuuko')
const { Eris } = require('eris')
const Gamedig = require('gamedig')
// const getServerData = require('../utils/get.js')
// const gamedigType = process.env.GAMEDIG_TYPE
// const gamedigHost = process.env.GAMEDIG_HOST
// const gamedigPort = process.env.GAMEDIG_PORT

const servers = new Map()

function getServerInfo () {
  delete require.cache[require.resolve('../serverinfo.json')] // ensure new IPs were not added

  const serverInfo = require('../serverinfo.json')

  console.log(serverInfo.servers.length)
  for (let i = 0; i < serverInfo.servers.length; i++) {
    const type = serverInfo.servers[i].type
    const ip = serverInfo.servers[i].ip
    const port = serverInfo.servers[i].port
    console.log(ip)

    // query each IP in the file.
    Gamedig.query({
      type: type,
      host: ip,
      port: port,
      maxAttempts: 3
    }).then((state) => {
      const serverName = state.name
      const map = state.map
      const players = state.players.length
      const maxPlayers = state.maxplayers

      servers.set(ip, [serverName, ip, map, players, maxPlayers])
      // console.log(servers.get(ip))
    }).catch((error) => {
      console.log('Server is offline')
    })
  }

  return servers
}

setInterval(() => {
  getServerInfo()
}, 60000) // Runs this every 60 seconds.

/*
module.exports = new Command('status2', async (message, args, context) => {
  getServerData(gamedigType, gamedigHost).then((state) => {
    message.channel.createMessage({
      embed: {
        title: 'SERVER INFO',
        color: 0x800000,
        description: 'Anonymous Networks Server Information',
        fields: [
          {
            name: state.name,
            value: state.map,
            inline: false
          }
        ],
        timestamp: new Date(),
        footer: {
          text: 'Arokh\'s Lair',
          icon_url: 'https://cdn.discordapp.com/icons/442730021165989910/d1f83595af94ebbaee7e499448386a48.webp'
        }
      }
    })
  })
}) */

module.exports = new Command('status', async (message, args, context) => {
  const embed = []
  getServerInfo().forEach((val, key, map) => {
    const info = servers.get(key)
    embed.push({ name: `${info[0]} (${info[1]})`, value: `Map: ${info[2]} (${info[3]}/${info[4]})`, inline: true })
  })
  if (embed[0] == null) {
    message.channel.createMessage({
      embed: {
        title: 'Server Status',
        description: 'All servers are offline!',
        color: 0xFF0000
      }
    })
  } else {
    message.channel.createMessage({
      embed: {
        title: 'Server Status',
        fields: embed,
        color: 0x00FF00
      }
    })
  }
})

const { EventListener } = require('yuuko')
module.exports = new EventListener('ready', ({ client }) => {
  // client = bot
  console.log(`Logged in as ${client.user.usename}`)
})

const Gamedig = require('gamedig')

module.exports = getServerData = async (gamedigType, gamedigHost, gamedigPort) => {
  try {
    const serverData = await Gamedig.query({
      type: gamedigType,
      host: gamedigHost,
      port: gamedigPort
    })
    return serverData
  } catch (err) {
    console.log('Server is offline')
    return null
  }
}

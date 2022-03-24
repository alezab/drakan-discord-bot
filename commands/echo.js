const { Command } = require('yuuko')
const { exec } = require('child_process')

module.exports = new Command('echo', (message, args, context) => {
  message.channel.createMessage('Test')
  exec('pwd', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      message.channel.createMessage(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      message.channel.createMessage(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    message.channel.createMessage(`stdout: ${stdout}`)
  })
})

const http = require('node:http')
const { findAvailablePort } = require('../free-port/free-port.js')

const server = http.createServer((req, res) => {
  console.log('Request made')
  res.end('Hello World')
})

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})

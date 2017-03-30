const express = require('express')
const app = express()
var mockContract = null
var server = null

app.get('/contract', function(req, res) {
  res.status(200).json(mockContract)
})

const start = function(options, done) {
  mockContract = options.contract
  server = app.listen(options.port, done)
}

const stop = function(done) {
  server.close(done)
}

module.exports = { start, stop }
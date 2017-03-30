'use strict'

const prettyjson = require('prettyjson')

const getStats = require('./getStats')
const run = require('./run')
const send = require('./send')

const generateCallback = function (statusCode) {
  return function (error, response, body) {
    const parsed = JSON.parse(body)
    const prettified = prettyjson.render(parsed)

    /* eslint-disable no-console */
    console.log(prettified)
    /* eslint-enable no-console */

    if (response.statusCode === statusCode) {
      if (parsed.every(contractPassed)) {
        process.exit(0)
      }
    }

    process.exit(1)
  }
}

module.exports = { generateCallback, getStats, run, send }

const contractPassed = function (result) {
  return result.status === 'Pass'
}

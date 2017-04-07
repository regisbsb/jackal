'use strict'

const fs = require('fs')
const defaultConfig = require('./default-config')
const readConfig = require('./config-reader')

describe('readConfig', function () {
  let dockerTestConfig, baseUrlConfig, portConfig, overridenConfig

  before(function () {
    const buf = fs.readFileSync('examples/docker_test_config.json')
    dockerTestConfig = JSON.parse(buf.toString())
    dockerTestConfig.stats = {}

    baseUrlConfig = Object.assign({}, defaultConfig, { jackal: { baseUrl: 'http://fake.url' } })
    portConfig = Object.assign({}, defaultConfig, { jackal: { port: 1234 } })
  })

  it('should return default config when no config path is specified', function () {
    expect(readConfig({})).to.be.deep.equal(defaultConfig)
  })

  it('should return the default config when an incorrect config path is specified', function () {
    expect(readConfig({ configPath: 'fake' })).to.be.deep.equal(defaultConfig)
  })

  it('should return the correct config when reading from a json file', function () {
    expect(readConfig({ configPath: 'examples/docker_test_config.json' })).to.be.deep.equal(dockerTestConfig)
  })

  it('should return the correct config when reading from a yaml file', function () {
    expect(readConfig({ configPath: 'examples/docker_test_config.yaml' })).to.be.deep.equal(dockerTestConfig)
  })

  it('should allow overriding of baseUrl in the jackal section', function () {
    expect(readConfig({ baseUrl: 'http://fake.url' })).to.be.deep.equal(defaultConfig)
  })

  it('should allow overriding of port in the jackal section', function () {
    expect(readConfig({ port: 1234 })).to.be.deep.equal(defaultConfig)
  })
})
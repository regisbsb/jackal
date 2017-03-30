// const async = require('async')
// const provider = require('./test-provider')
// const jackal = require('./test-jackal')
// const consumer = require('./../../client')
//
// describe('Jackal database dump and recovery', function() {
//   var server = null
//
//   before(function(done) {
//     jackal.start(done)
//   })
//
//   after(function(done) {
//     async.parallel([jackal.stop, provider.stop], done)
//   })
//
//   it('The provider should start successfully', function(done){
//     provider.start({
//       port: 5000,
//       contract: { version: '1' }
//     }, done)
//   })
//
//   it('Sending contract-v1 the first time should pass', function(done) {
//     sendContractV1(done)
//   })
// })
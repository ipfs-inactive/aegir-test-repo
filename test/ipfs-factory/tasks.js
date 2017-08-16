'use strict'

const factoryServer = require('./server')

let factory

module.exports = {
  start (done) {
    console.log('START SERVER')
    factoryServer((err, http) => {
      if (err) {
        return done(err)
      }
      factory = http
      done()
    })
  },
  stop (done) {
    console.log('STOP SERVER')
    factory.stop({
      timeout: 1
    }, done)
  }
}

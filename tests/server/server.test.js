var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test('GET /categories', t => {
  return request(t.context.app)
    .get('/api/categories')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 9)
        resolve()
      })
    })
})

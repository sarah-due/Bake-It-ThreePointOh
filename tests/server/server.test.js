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
        t.is(result.body[0].category_id, 2201)
        resolve()
      })
    })
})

test('GET /recipes', t => {
  return request(t.context.app)
    .get('/api/recipes')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 32)
        t.is(result.body[0].recipe_id, 1)
        resolve()
      })
    })
})

test('GET /bakeshops', t => {
  return request(t.context.app)
    .get('/api/bakeshops')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 4)
        t.is(result.body[0].bakeshop_name, 'Leeds Street Bakery')
        resolve()
      })
    })
})

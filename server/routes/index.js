var express = require('express')
var router = express.Router()

var greetingsDb = require('../db/greeting')



router.get('/', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getGreetings(db)
    .then(greetings => {
      res.json(greetings)
    })
})

router.get('/spanishGreetings', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getSpanishGreetings(db)
    .then(spanishGreetings => {
      res.json(spanishGreetings)
    })
})

router.get('/farewells', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getFarewells(db)
    .then(farewells => {
      res.json(farewells)
    })
})

router.get('/spanishFarewells', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getSpanishFarewells(db)
    .then(spanishFarewells => {
      res.json(spanishFarewells)
    })
})


module.exports = router

var express = require('express')
var router = express.Router()

var mainDB = require('../db/mainDB')



router.get('/categories', (req, res) => {
  let db = req.app.get('db')
  mainDB.getCategories(db)
    .then(categories => {
      res.json(categories)
    })
})

router.get('/recipes', (req, res) => {
  let db = req.app.get('db')
  mainDB.getRecipes(db)
    .then(recipes => {
      res.json(recipes)
    })
})

router.get('/bakeshops', (req, res) => {
  let db = req.app.get('db')
  mainDB.getBakeShops(db)
    .then(bakeshops => {
      res.json(bakeshops)
    })
})

module.exports = router

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


module.exports = router

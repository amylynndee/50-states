let expresss = require('express')
let States = require('../models').States

let router = expresss.Router()

router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

module.exports = router
let expresss = require('express')
let States = require('../models').States

let router = expresss.Router()

// fetch all of the states
router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

// patch route to update a state - visited or not
// request to states/Iowa
// states/qwerty
router.patch('/states/:name', function(req, res, next){
    let stateName = req.params.name // Iowa
    let stateVisited = req.body.visited  // true

    States.update( { visited: stateVisited }, { where: { name: stateName }})
    .then( rowsUpdated => {
        let numberOfRowsUpdated = rowsUpdated[0]
        if (numberOfRowsUpdated == 1) {
            return res.send('ok')   /// status code 200
        }
        return res.status(404).send('State not found')
    })
    .catch( err => next(err) )
})

module.exports = router
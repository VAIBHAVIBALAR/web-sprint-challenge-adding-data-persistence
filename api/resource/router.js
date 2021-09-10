const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    helpers.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newResources = await helpers.createResource(req.body)
            res.status(201).json(newResources)
    }catch(err){
        next(err)
    }
})

module.exports = router

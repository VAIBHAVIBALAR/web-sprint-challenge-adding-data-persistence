// build your `/api/resources` router here
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

router.post('/', (req, res, next) => {
    helpers.createResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})

module.exports = router

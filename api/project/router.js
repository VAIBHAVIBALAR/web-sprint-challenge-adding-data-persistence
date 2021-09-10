const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
            const projects = await helpers.getProject()
            projects.forEach((project) => {
                if(project.project_completed === 1){
                    project.project_completed = true
                } else {
                    project.project_completed = false
                }
            });
                res.status(200).json(projects)
        } catch(err){
            next(err)
            }
})

router.post('/', async (req, res, next) => {
    try {
            const newProjects = await helpers.createProject(req.body)
                if(newProjects.project_completed === 1){
                     newProjects.project_completed = true
                } else {
                     newProjects.project_completed = false
                     }
                     res.status(201).json(newProjects)
        } catch(err){
            next(err)
            }
})

module.exports = router

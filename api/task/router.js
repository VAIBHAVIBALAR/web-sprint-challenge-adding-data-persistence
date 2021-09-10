// build your `/api/tasks` router here
const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await helpers.getTask()
        tasks.forEach((task) => {
            if(task.task_completed === 1){
                task.task_completed = true
            } else {
                task.task_completed = false
            }
         });
        res.status(200).json(tasks)
    }catch(err){
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const newTasks = await helpers.createTask(req.body)
        if(newTasks.task_completed === 1){
            newTasks.task_completed = true
        }else {
            newTasks.task_completed = false
        }
        res.status(201).json(newTasks)
    }catch(err){
        next(err)
    }
})
module.exports = router

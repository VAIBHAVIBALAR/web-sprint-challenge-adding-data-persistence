// build your `Task` model here
const db = require('../../data/dbConfig')

function getTask() {
    return db('tasks')
}

function createTask(task) {
    const [task_id] = db('tasks').insert(task)
    return getTask().where({ task_id})
}

module.exports = { getTask, createTask}
// build your `Task` model here
const db = require('../../data/dbConfig')

function getTask() {
    return db('tasks as ta')
    .leftJoin('projects as pr', 'ta.project_id', 'pr.project_id')
    .select('ta.task_notes', 'ta.task_description', 'ta.task_completed', 'pr.project_name', 'pr.project_description')
}

async function createTask(task) {
    const newTasks = await db('tasks').insert(task)
    .then(([newTask]) => {
    return db('tasks').where('task_id', newTask).first()
    })
    return newTasks
}


module.exports = { getTask, createTask}
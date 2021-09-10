// build your `Project` model here in this file
const db = require('../../data/dbConfig')

function getProject() {
    return db('projects as pr')
}

async function createProject(project) {
    const newProject = await db('projects').insert(project)
    .then(([newData]) => {
    return db('projects').where('project_id', newData).first()
    })
    return newProject
}

module.exports = { getProject, createProject}
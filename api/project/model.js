// build your `Project` model here in this file
const db = require('../../data/dbConfig')

function getProject() {
    return db('projects as pr')
    .select('pr.project_name', 'pr.project_description', 'pr.project_completed')
}

function createProject(project) {
    const [project_id] = db('projects').insert(project)
    return getProject().where({ project_id})
}

module.exports = { getProject, createProject}
// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources() {
    return await db('resources')
}

function createResource(resource) {
    const [resource_id] = db('resources').insert(resource)
    return getResource().where({ resource_id})
}

module.exports = { getResources, createResource}
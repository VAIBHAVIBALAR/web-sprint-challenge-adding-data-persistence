// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources() {
    return await db('resources')
}

async function createResource(resource) {
    const newResource = await db('resources').insert(resource)
    .then(([newResource]) => {
    return db('resources').where('resource_id', newResource).first()
    })
    return newResource
}

module.exports = { getResources, createResource}
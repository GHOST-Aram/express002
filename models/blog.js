const { Model, ModelSchema} = require('../db/model')

const blogSchema = new ModelSchema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamp: true })

const Blog = new Model('Blog', blogSchema)

module.exports = Blog
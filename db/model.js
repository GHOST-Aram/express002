const mongoose = require('mongoose')

const model = (identifier, schema) =>{
    return mongoose.model(identifier, schema)
}
class ModelSchema extends mongoose.Schema{
    constructor(definition, options){
        super(definition, options)
    }
}
class Model {
    constructor(identifier, schema){
        return mongoose.model(identifier, schema)
    }
}
module.exports = {Model, ModelSchema}
const mongoose = require('mongoose')

class ModelSchema extends mongoose.Schema{
    constructor(definition, options){
        super(definition, options)
    }
}
class Model {
    constructor(identifier, schema){
        this.model = mongoose.model(identifier, schema)
        return this.model
    }
}
module.exports = {Model, ModelSchema}
class DataStore{
    constructor(dbAbstractor){
        this.dbAbstractor = dbAbstractor
    }

    connect = (dbURI, callback) =>{
        this.dbAbstractor.connect(
            dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
        ).then((result) =>() =>{
            callback
            console.log('Woo!, Connected to DB:')
        }).catch((error) => console.log(error))
    }
    createNew = (Model, data) =>{
        return new Model(data)
    }
    findOne = (Id, Model) =>{
        let item = {}
        Model.findById(Id)
        .then((result) => item =result)
        .catch((error) => console.log(error))
        
        return item
    }
    save = (modelInstance, callback) =>{
        modelInstance.save().then((result) =>{
            callback
        }).catch((error) => console.error(error))
    }
    
    findAll = (Model) =>{
        let collection = []
        Model.find().sort({ createdAt: -1 })
        .then((result) => {
            collection = result
        }).catch((error) => console.log(error))

        return collection
    }   
} 
module.exports = DataStore
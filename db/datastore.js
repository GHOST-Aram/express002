class DataStore{
    constructor(dbAbstractor){
        this.dbAbstractor = dbAbstractor
    }

    connect = async(dbURI) =>{
        // try {
        //     await this.dbAbstractor.connect(
        //         dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
        //     )
        //     console.log('Woo!, Connected to DB:')
        //     callback
        // } catch (error) {
        //     console.error(error)
        // }
        this.dbAbstractor.connect(
            dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
        ).then((result) =>() =>{
            console.log('Connected to Db')
        }).catch((error) => console.log(error))
    }
    createNew = (Model, data) =>{
        return new Model(data)
    }
    findOne = async(Id, Model) =>{
        try{
            let item = await Model.findById(Id)
            return item
        } catch(error){
            console.error(error)
        }
    }
    save = async(modelInstance, callback) =>{
        try {
            await modelInstance.save()
            callback
        } catch (error) {
            console.error(error)
        }
        // modelInstance.save().then((result) =>{
        //     callback
        // }).catch((error) => console.error(error))
    }
    
    findAll = async(Model) =>{
        // try {
        //     const collection =  await Model.find().sort({ createdAt: -1 })
        //     return await collection
        
        // } catch (error) {
        //     console.error(error)
        // }
        let collection = []
        Model.find().sort({ createdAt: -1 })
        .then((result) => {
            collection = result
        }).catch((error) => console.log(error))

        return collection
    }   
} 
module.exports = DataStore
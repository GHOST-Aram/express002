class DataStore{
    constructor(dbAbstractor){
        this.dbAbstractor = dbAbstractor
    }

    connect = (dbURI) =>{
        this.dbAbstractor.connect(
            dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
        ).then((result) =>console.log('Woo!, Connected to DB:'))
        .catch((error) => console.log(error))
    }
}
module.exports = DataStore
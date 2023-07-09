const morgan = require('morgan')

class Middlewear{
    constructor(app){
        this.app = app
    }
    log = () =>{
        this.app.use((request, response, next) =>{
            console.log('New Request Made: ')
            console.log('Url: ', request.url)
            console.log('Method: ', request.method)
            console.log('host: ', request.hostname)
            console.log('Path: ', request.path)
            next()
        })
    }
    logRequest = (option) =>{
        this.app.use(morgan(option))
    }
    
}
module.exports = Middlewear
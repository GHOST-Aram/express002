const { response } = require("express")

class Server{ 
    constructor(expressApp){
        this.app = expressApp
    }   
    listen = (port) =>{
        this.app.listen(port, 
            ()=> console.log(`Server running at: http://localhost:${port}`)
        )
    }
    logRequest = () =>{
        this.app.use((request, response, next) =>{
            console.log('New Request Made: ')
            console.log('Url: ', request.url)
            console.log('Method: ', request.method)
            console.log('host: ', request.hostname)
            console.log('Path: ', request.path)
            next()
        })
    }
    redirect = (url, to) =>{
        this.app.get(url, (request, response) =>{
            response.redirect(to)
        })
    }
    render = (url, filename, context) =>{
        this.app.get(url, (request, response) =>{
            response.render(filename, context)
        })
    }

    setViewEngine = (viewEngine) =>{
        this.app.set('view engine', viewEngine)
    }

    setViewsDirectory = (dirname) =>{
        this.app.set('views', dirname)
    }

}

module.exports = Server
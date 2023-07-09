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
    render404 = (filename, context) =>{
        this.app.use((request, response) => {
            response.status(404).render(filename, context)
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
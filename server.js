class Server{ 
    constructor(expressApp){
        this.app = expressApp
    }   
    listen = (port) =>{
        this.app.listen(port, 
            ()=> console.log(`Server running at: http://localhost:${port}`)
        )
    }
    
    render = (url, filename, context) =>{
        this.app.get(url, (request, response) =>{
            response.render(filename, context)
        })
    }

    render404 = (filename) =>{
        this.app.use((request, response) => {
            response.status(404).render(filename)
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
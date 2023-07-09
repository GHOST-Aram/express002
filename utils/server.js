class Server{ 
    constructor(expressApp){
        this.app = expressApp
    }   
    listen = (port) =>{
        this.app.listen(port, 
            ()=> console.log(`Server running at: http://localhost:${port}`)
        )
    }

    setViewEngine = (viewEngine) =>{
        this.app.set('view engine', viewEngine)
    }

    setViewsDirectory = (dirname) =>{
        this.app.set('views', dirname)
    }

}

module.exports = Server
class Server{ 
    constructor(expressApp){
        this.app = expressApp
    }   
    listen = (port) =>{
        this.app.listen(port, 
            ()=> console.log(`Server running at: http://localhost:${port}`)
        )
    }
   

}

module.exports = Server
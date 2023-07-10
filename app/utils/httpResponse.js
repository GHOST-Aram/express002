const { request, response } = require("express")

class HttpResponse{ 
    constructor(expressApp){
        this.app = expressApp
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
    
}
module.exports = HttpResponse
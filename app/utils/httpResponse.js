const { request, response } = require("express")

class HttpResponse{ 
    constructor(expressApp){
        this.app = expressApp
    }
    findSingleBlog = (url,blogId, Model) =>{
        this.app.get(url, (request, response) =>{
            Model.findById(blogId)
            .then((result) =>response.send(result))
            .catch((error) => console.log(error))
        })
    }
    getAllBlogs = (url,Model) =>{
        this.app.get(url, (request, response) =>{
            Model.find()
            .then((result) => response.send(result))
            .catch((error) => console.log(error))
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
    render404 = (filename, context) =>{
        this.app.use((request, response) => {
            response.status(404).render(filename, context)
        })
    }
    saveBlog = (url, blog) =>{
        this.app.get(url, (req, res) =>{
            blog.save()
            .then((result) => res.send(result))
            .catch((error) => console.error(error))
        })
    }
}
module.exports = HttpResponse
const HttpResponse = require('./httpResponse')
const Middlewear = require('./middlewear')
const Server = require('./server')
const express = require('express')
const app = express()

const middlewear =  new Middlewear(app)
const response = new HttpResponse(app)
const server = new Server(app)
const port = process.env.PORT || 3000
const blogs = [
    {
        title: 'Brisky Skies', 
        snippet: 'Brisky Skies about to fall over Dubai'
    },
    {
        title: '2030 Technologies', 
        snippet: 'AI set to take over the world in 2030'
    },
    {
        title: 'Software Engineering Dynamics', 
        snippet: 'The Ups and Downs of creating with code'
    },
]

server.listen(port)
server.setViewEngine('ejs')
server.setViewsDirectory('templates')
middlewear.logRequest('tiny')

response.render('/','index', { title: 'Home', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.render404('404', { title: 'Page Not Found' })

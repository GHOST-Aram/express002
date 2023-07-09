const Server = require('./server')
const express = require('express')
const app = express()

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
server.logRequest()

server.render('/','index', { title: 'Home', blogs } )
server.render('/about', 'about', { title: 'About Us' })
server.redirect('/about-us', '/about')
server.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
server.render404('404', { title: 'Page Not Found' })

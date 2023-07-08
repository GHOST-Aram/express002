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
        snippet: 'The Ups and Downs od creating with code'
    },
]

server.listen(port)
server.setViewEngine('ejs')
server.setViewsDirectory('templates')
server.render('/','index', { title: 'Home', blogs } )
server.render('/about', 'about', { title: 'About Us' })
server.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
app.use((request, response) => {
    response.status(404).render('404', { title: 'Page Not Found' })
})

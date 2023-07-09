const HttpResponse = require('./utils/httpResponse')
const Middlewear = require('./utils/middlewear')
const Server = require('./utils/server')
const Settings = require('./utils/settings')
const express = require('express')

const middlewear =  new Middlewear(app)
const response = new HttpResponse(app)
const settings = new Settings(app)
const server = new Server(app)

const app = express()
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

settings.setViewEngine('ejs')
settings.setViewsDirectory('templates')
settings.setStaticDir('./static')

middlewear.logRequest('tiny')

response.render('/','index', { title: 'Home', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.render404('404', { title: 'Page Not Found' })

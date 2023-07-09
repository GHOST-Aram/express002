const blogs = require('./fakeDb')
const DataStore = require('./db/datastore')
const dbURI = require('./dbCredentials')
const Environment = require('./utils/environment')
const express = require('express')
const HttpResponse = require('./utils/httpResponse')
const Middlewear = require('./utils/middlewear')
const mongoose = require('mongoose')
const Server = require('./utils/server')

const app = express()

const env = new Environment(app)
env.setViewsDirectory('templates')
env.setViewEngine('ejs')
env.setStaticDir('./static')

const server = new Server(app)
const port = env.getPort()
server.listen(port)


const db = new DataStore(mongoose)
db.connect(dbURI)

const middlewear =  new Middlewear(app)
middlewear.logRequest('tiny')

const response = new HttpResponse(app)
response.render('/','index', { title: 'Home', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.render404('404', { title: 'Page Not Found' })

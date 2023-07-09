const blogs = require('./fakeDb')
const dbURI = require('./dbCredentials')
const {env, server,db, middlewear,response} = require('./app/utils')

env.setViewsDirectory('templates')
env.setViewEngine('ejs')
env.setStaticDir('./static')

const port = env.getPort()
server.listen(port)


db.connect(dbURI)

middlewear.logRequest('tiny')

response.render('/','index', { title: 'Home', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.render404('404', { title: 'Page Not Found' })

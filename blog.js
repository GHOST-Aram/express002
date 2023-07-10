const dbURI = require('./dbCredentials')
const { app, Blog, env, server, db, middlewear, response} = require('./app/utils')

env.setViewsDirectory('templates')
env.setViewEngine('ejs')
env.setStaticDir('./static')

const port = env.getPort()
db.connect(dbURI, () => server.listen(port))

middlewear.logRequest('tiny')
middlewear.encodeUrl({ extended: true })

//Create blog from request
// 

// const blog = new Blog(
    //     {
        //         title: 'New Blog 2',
        //         snippet: 'About My Blog 2',
        //         body: 'More about my blog 2'
        //     }
        // )
        // db.save(blog)
        
app.post('/blogs', (req, res) =>{
   const blog = db.createNew(Blog, req.body)
   db.save(blog, ()=>res.redirect('/'))
})

const blogs  = []

response.render('/','index', { title: 'Home', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.redirect('/all-blogs', '/')
response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.render404('404', { title: 'Page Not Found' })

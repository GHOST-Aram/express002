const dbURI = require('./dbCredentials')
const { app, Blog, env, server, db, middlewear, response} = require('./app/utils')

env.setViewsDirectory('templates')
env.setViewEngine('ejs')
env.setStaticDir('./static')

const port = env.getPort()
// db.connect(dbURI, 
    // () => 
    server.listen(port)
    // )

middlewear.logRequest('tiny')
middlewear.encodeUrl({ extended: true })


app.post('/blogs', (req, res) =>{
   const blog = db.createNew(Blog, req.body)
   db.save(blog, () =>res.redirect('/'))
})

app.get('/blogs/:id', (req, res) =>{
    const id = req.params.id
    const blog = db.findOne(id)
    res.render('details', {blog, title: 'Blog Details'})
})

const blogs  = [
    {   
        _id: 1,
        title: 'Tokyo Yushi', 
        snippet: 'New Lifestyle dicovered in Tokyo',
        body: 'More about Tokyo Yushi'
    },
    {
        _id: 2,
        title: 'Nairobi Set up for new inovations',
        snippet: 'Find out about new interesting investments in Nairobi',
        body: 'More about Investing inn Tech in the east african city'
    },
    {   
        _id: 3,
        title: 'New Flight to Duban',
        snippet: 'KQ collaborating wit SA air to take you to and fro',
        body: 'More about KQ and SA air collab'
    }
]

response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.redirect('/', '/blogs')
response.render('/blogs','index', { title: 'Blogs', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.render404('404', { title: 'Page Not Found' })

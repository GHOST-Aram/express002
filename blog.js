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

app.get('/blogs/create', (req, res) =>{
    res.render('create-blog', { title: 'Create Blog'})
})

app.get('/blogs/:id', (req, res) =>{
    const id = req.params.id
    const blog = db.findOne(id)
    res.render('details', {blog, title: 'Blog Details'})
})

app.get('/', (req, res) =>{
    res.redirect('/blogs')
})

app.get('/blogs', (req, res) =>{
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
    res.render('index', {title: 'Blogs', blogs})
})
app.get('/about', (req, res) =>{
    res.render('about', { title: 'About Us'})
})

app.get('/about-us', (req, res) =>{
    res.redirect('/about')
})
app.use((req, res) =>{
    res.status(404).render('404', {title: 'Page Not Found'})
})


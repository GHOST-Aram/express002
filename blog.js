const dbURI = require('./dbCredentials')
const { app, Blog, env, server, db, middlewear, response} = require('./app/utils')

env.setViewsDirectory('templates')
env.setViewEngine('ejs')
env.setStaticDir('./static')

const port = env.getPort()
db.connect(dbURI)
    server.listen(port)

middlewear.logRequest('tiny')
middlewear.encodeUrl({ extended: true })


app.get('/', (req, res) =>{
    res.redirect('/blogs')
})

app.get('/blogs', (req, res) =>{
   Blog.find().sort({ createdAt: -1 }).then((result) =>{
       res.render('index', {title: 'Blogs', blogs: result})
   }).catch((error) => console.error(error))
})

app.get('/create-blog', (req, res) =>{
    res.render('create-blog', { title: 'Create Blog'})
})

app.get('/blogs/:id', (req, res) =>{
    const id = req.params.id
    Blog.findById(id).then((blog) =>{
        res.render('details', {blog, title: 'Blog Details'})
    }).catch((error) => console.error(error))
})

app.post('/blogs', (req, res) =>{
   const blog = new Blog(req.body)
    blog.save().then((result) =>{
        res.redirect('/')
    })
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


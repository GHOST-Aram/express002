const dbURI = require('./dbCredentials')
const utils = require('./app/utils')
const  blogsRouter = require('./routes/blog-routes')
const app = utils.app
const env = utils.env
const server = utils.server
const db = utils.db
const middlewear = utils.middlewear

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

app.use('/blogs', blogsRouter)

app.get('/create', (req, res) =>{
    res.render('create-blog', { title: 'Create Blog'})
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


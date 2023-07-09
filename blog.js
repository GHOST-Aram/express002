const blogs = require('./fakeDb')
const dbURI = require('./dbCredentials')
const { Blog, env, server, db, middlewear, response } = require('./app/utils')

env.setViewsDirectory('templates')
env.setViewEngine('ejs')
env.setStaticDir('./static')

const port = env.getPort()
db.connect(dbURI, server.listen(port))

middlewear.logRequest('tiny')
const blog = new Blog(
    {
        title: 'New Blog 2',
        snippet: 'About My Blog 2',
        body: 'More about my blog 2'
    }
)
// Blogs
response.saveBlog('/add-blog', blog)
response.getAllBlogs('/all-blogs', Blog)
response.findSingleBlog('/single-blog', '64aab6c749f9d71eb9d694de', Blog)

response.render('/','index', { title: 'Home', blogs } )
response.render('/about', 'about', { title: 'About Us' })
response.redirect('/about-us', '/about')
response.render('/blogs/create', 'create-blog', {title: 'Create Blog'})
response.render404('404', { title: 'Page Not Found' })

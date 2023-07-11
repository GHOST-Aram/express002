const utils = require('../app/utils')
const Blog = utils.Blog


const blog_delete =  (req, res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id).then(result =>{
        res.json({redirect: '/blogs'})
    }).catch(error=> console.error(error))
}

const blog_details = (req, res) =>{
    const id = req.params.id
    Blog.findById(id).then(
        blog =>{
            res.render('blog/details', {blog, title: 'Blog Details'})
            console.log(blog)
        }
    ).catch(
        error => {
            res.status(404).render('404', { title: 'Page Not Found' })
            console.error(error)
    })   
}

const blog_index =  (req, res) =>{
    Blog.find().then((result) =>{
        res.render('blog/index', {title: 'Blogs', blogs: result})
    }).catch((error) => console.error(error))
}

const blog_post = (req, res) =>{
    const blog = new Blog(req.body)
     blog.save().then((result) =>{
         res.redirect('/')
    })
}

module.exports = {
    blog_index,
    blog_delete,
    blog_details,
    blog_post
}
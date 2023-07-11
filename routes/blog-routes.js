'use strict'
const utils = require('../app/utils')
const Blog = utils.Blog
const router = utils.router

router.get('/', (req, res) =>{
   Blog.find().then((result) =>{
       res.render('index', {title: 'Blogs', blogs: result})
   }).catch((error) => console.error(error))
})


router.delete('/:id', (req, res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id).then(result =>{
        res.json({redirect: '/blogs'})
    }).catch(error=> console.error(error))
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    Blog.findById(id).then((blog) =>{
        res.render('details', {blog, title: 'Blog Details'})
    }).catch((error) => console.error(error))
})


router.post('/', (req, res) =>{
   const blog = new Blog(req.body)
    blog.save().then((result) =>{
        res.redirect('/')
    })
})

module.exports = router
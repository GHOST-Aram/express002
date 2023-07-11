const utils = require('../app/utils')
const router = utils.router
const blogController = require('../controllers/blogControllers')

router.get('/',blogController.blog_index)
router.delete('/:id',blogController.blog_delete)
router.get('/:id', blogController.blog_details)
router.post('/', blogController.blog_post)

module.exports = router
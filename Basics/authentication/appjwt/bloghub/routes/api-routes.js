const router = require('express').Router();

router.get('/',  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to BLOGHub crafted with love!',
    });
});

const blogController = require('../controller/blogController');

router.route('/blog/:blogid')
    .get(blogController.view)
    // .patch(profileController.update)
    .put(blogController.update)
    .delete(blogController.delete);
router.route('/blog')
    .get(blogController.index)
    .post(blogController.new);
    
module.exports = router;
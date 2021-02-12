// api-routes.js
// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/',  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import profile controller
var profileController = require('../controller/profileController');
// profile routes

router.route('/profile/:profileid')
    .get(profileController.view)
    // .patch(profileController.update)
    .put(profileController.update)
    .delete(profileController.delete);
router.route('/profile')
    .get(profileController.index)
    .post(profileController.new);
// Export API routes
module.exports = router;
const express = require('express'),
      router = express.Router();

router.post('/create', product_controller.product_create);      
exports.product_create =  (req, res) => {
    const product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save( (err)  => {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};     
module.exports = router;
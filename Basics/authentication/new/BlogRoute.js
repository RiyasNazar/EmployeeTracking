const express = require('express');
const router = express.Router(),
      app = express(),
      Blog = require('./Blog');
 
app.use('/blog', Blog);

router.post('/blog', (req, res) => {
  const Blog = new Blog ({
    blogname: req.body.blogname,
    blogid: req.body.blogid
  })
  Blog.save((err) => {
    if (err) {
      return res.send(err);
    }
  Blog.find()
    .then((data) => {
      res.render('index', { title: 'List', data: data });
      res.send(Blog);
    })
    .catch((err) => {
      return res.send(err);
    });
  });
});  

module.exports = router;
const express = require('express'),
      router = express.Router(),
      app = express();

const Blogcontroller = require('../controllers/Blog.controller');
app.use('/Blog', Blogcontroller);

router.post('/create', verifyToken, Blogcontroller.Base)
exports.RegistersModel =  (req, res) => {
  let count = 0;
  const Register = new Register ({
    username: req.body.username,
    password: req.body.password
  });
  RegisterModel.map((item) => {
    if(item.username === req.body.username && item.password === req.body.password) {
      jwt.sign({blog},'secretkey', {expiresIn: '30s'}, (err,token) => {
        return res.send({ token });
      });
      count++;
    };  
    if(count === 0) {    
      return res.status(500).send({
        error: "id or password not matched"
      });
    };
    exports.BlogsModel =  (req, res) => {
      const blog = new Blog({
        blogname: req.body.blogname,
        blogid: req.body.blogid
      });
      blog.save ( (err) => {
        if (err) {
          return next(err);
        }
        res.send('Blog Created successfully')
      }); 
    };
  });
};        

function verifyToken  (req,res,next) {
  jwt.verify(req.token,'secretkey',(err,authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const bearerHeader =  req.headers['authorization'];
      if(typeof bearerHeader != 'undefined') {
        const bearer =  bearerHeader.split(''),
              bearerToken = bearer[1];
        req.token = bearerToken;
        next();
      }
    };    
  });    
};

router.get('/test', Blogcontroller.test)
router.get('/:id', blogcontroller.blogdetails);
exports.blogsdetails = (req, res) => {
    Blog.findById(req.params.id,  (err, blog) => {
        if (err) return next(err);
        res.send(blog);
    })
};

module.exports = router;

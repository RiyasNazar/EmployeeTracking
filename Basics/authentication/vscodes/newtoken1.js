const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'), 
      jwt = require('jsonwebtoken'),
      cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser()); 

const register = [];

app.post('/signup',  (req, res) => {
    register.push ({    
      "username": req.body.username,
      "password": req.body.password,  
    });
    res.send(register);
});

const blog = [{ 
    "blogtitle":"new",
    "createdby":"pink",
    "createdtime":"jan19"
}];

app.post('/login',(req,res) => {
  try {
    let count = 0;
    login = {
      "username": req.body.username,
      "password": req.body.password
    };
    register.map((item) => {
      if(item.username === req.body.username && item.password === req.body.password) {
        jwt.sign({blog},'secretkey', {expiresIn: '30s'}, (err,token) => {
          return res.send({ token });
        });
        count++;
      } if(count === 0) {    
        return res.send ("idname or password doesn't match");
      };
    });  
  } catch (error) {
    return res.send(error);
  }    
  res.cookie("blogdetail",blog);
});    

app.post('/blog', verifyToken, (req,res) => {
  try { 
    blog.push({
      "blogtitle": req.body.blogtitle,
      "createdby": req.body.createdby,
      "createdtime": req.body.createdtime     
    });  
    res.send(blog);
  } catch (error) {
    return res.send(error);
  }     
});        

function verifyToken  (req,res,next) {
      const bearerHeader =  req.headers['authorization']; 
      jwt.verify(req.token,'secretkey',(err,authData) => {
        if (err) {
          res.sendStatus(403);
        } else
      if(typeof bearerHeader != 'undefined') {
        const bearer =  bearerHeader.split(''),
              bearerToken = bearer[1];
        req.token = bearerToken;
        next();
        res.send(blog);
      }
    });    
  };    

app.get('/blog1', (req,res) => {
    res.send(req.cookies);
});



app.listen(2000, () => {
    console.log("server is listening on port 2000");
});

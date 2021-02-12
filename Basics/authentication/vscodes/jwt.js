const express = require('express'),
      app = express(),
      jwt = require('jsonwebtoken'),
      cookieParser = require('cookie-parser');

app.use(cookieParser()); 

const users = { 
  bookid: 1, 
  bookname: "Darknoon",
  edition: "Feb2018"
} 

app.get('/api',(req,res) => {
  res.cookie("userData", users); 
  res.send('user data added to cookie'); 
});

app.get('/getuser', (req, res)=>{ 
  res.send(req.cookies); 
}); 

app.post('/api/post', verifyToken,(req,res) => {
  jwt.verify(req.token,'secretkey',(err,authData) =>{
    if(err){
      res.sendStatus(403);
    } else {
      res.cookie({
        message: 'posted',
        authData
      });
      res.send(req.cookies);
    }
  })
});

app.post('/api/login',(req,res) => {
  const user = {
    bookid: 2,
    bookname: "middlemarch",
    edition: "jan2011"
  }
 //jwt.sign({user},'secretkey', {expiresIn: '30s'}, (err,token) => {
    res.cookie("usersdata",user);
    res.send({
     token
     // });
    });
});

function verifyToken (req,res,next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader != 'undefined') {
    const bearer = bearerHeader.split(''),
    bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
  res.sendStatus(403);
  }
}

app.listen(6000, () => {
  console.log("server is listening on port 6000");
});
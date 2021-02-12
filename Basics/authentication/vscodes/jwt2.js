const express = require('express'),
      app = express(),
      jwt = require('jsonwebtoken'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

app.use(cookieParser()); 
app.use(bodyParser.urlencoded({extended : true}));

const users = { 
  bookid: 1, 
  bookname: "Darknoon",
  edition: "Feb2018"
  } 

app.get('/api',(req,res) => {
    res.cookie("userData", users); 
    //res.send('user data added to cookie');
    res.send(req.cookies); 
});

/*app.get('/getuser', (req, res) => { 
    res.send(req.cookies); 
});*/ 

app.post('/api/login',verifyToken,(req,res) => {
    jwt.verify(req.token,'secretkey',(err,authData) => {
        if (err) {
          res.sendStatus(403);
        } else {  
            users.push({
                "bookid": req.body.bookid,
                "bookname": req.body.bookname,
                "edition": req.body.edition,
                authData
              });
         res.cookie("usersdata",users);
         res.send('posted');
        }
    });
});

app.post('/api/post',(req,res) => {
    res.send(req.cookies);
});

app.post('/api//login',(req,res) => {
    jwt.sign({users},'secretkey', {expiresIn: '30s'}, (err,token) => {
        res.send({
         token
        });
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
      };
};

app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
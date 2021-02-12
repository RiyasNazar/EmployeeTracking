const express = require('express'),
      app = express();
      bodyParser = require('body-parser'); 
      jwt = require('jsonwebtoken'),
      cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser()); 

const books = [{ 
    "bookid":1,
    "bookname":"moon",
    "edition":30
}];

app.get('/books', (req,res) => {
    res.send(books);
});

const register = [];
const login = [];

app.post('/signup',  (req, res) => {
    register.push ({
      "adminid": req.body.adminid,
      "adminpassword": req.body.adminpassword
    });
    res.send(register);
});

app.post('/login',verifyToken,(req,res) => {
    login.push({
      "userid": req.body.userid,
      "userpassword": req.body.userpassword
      });
    //res.send(login);
    if (register[0].adminid === req.body.userid && register[0].adminpassword === req.body.userpassword) {
      jwt.sign({books},'secretkey', {expiresIn: '30s'}, (err,token) => {
          res.send({ token });
          jwt.verify(req.token,'secretkey',(err,authData) => { 
           res.cookie("usersdata",books);
           books.push({
            "bookid": req.body.bookid,
            "bookname": req.body.bookname,
            "edition": req.body.edition
           }); 
           res.send(req.cookies);
           res.send(books);
          });
      });
    } else { 
      res.send ("idname or password doesn't match")
    }
});

function verifyToken (req,res,next) {
    const bearercookies = req.cookies['authorization'];
      if(typeof bearercookies != 'undefined') {
          const bearer = bearercookies.split(''),
                bearerToken = bearer[1];
          req.token = bearerToken;
          next();
       } else {
        res.sendStatus(403);
      };
  };

app.listen(8000, () => {
    console.log("server is listening on port 8000");
});

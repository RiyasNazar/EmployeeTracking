const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const books = [{ 
  "bookid":1,
  "bookname":"moon",
  "edition":30
}];

app.get('/books', (req,res) => {
   res.send(books);
});

app.post('/books', verifyToken, (req,res) => {
    jwt.verify(req.token,'secretkey',(err,authData) =>{
      if (err) {
        res.sendStatus(403);
      } else {   
        books.push({
          "bookid": req.body.bookid,
          "bookname": req.body.bookname,
          "edition": req.body.edition,
          authData
        });
      res.send(books);
      } 
    });
});

app.post('/api/login',(req,res) => {
    jwt.sign({books},'secretkey', {expiresIn: '30s'}, (err,token) => {
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
      
/*app.put('/books', (req,res) => {
    const bookid = req.body.bookid,
          bookname = req.body.bookname,
          edition = req.body.edition;
    books.forEach((book,i) => {
      if (books[i].bookid === bookid){
        books[i].bookname = bookname,
        books[i].edition = edition;
      }
    });
    res.send(books);
});

app.delete('/books', (req,res) => {
    const bookid = req.body.bookid;
    books.forEach((book, i) => {
        if (books[i].bookid == bookid) {
               books.splice(i,1);
        }
    });
    res.send(books);
  });*/ 


app.listen(4000, () => {
    console.log("server is listening on port 4000")
});

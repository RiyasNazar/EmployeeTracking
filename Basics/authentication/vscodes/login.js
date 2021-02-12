const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const books = [{ 
  "bookid":1,
  "bookname":"moon",
  "edition":30
}];

const login = [{"idname": "myuser","password": "password"}];

app.get('/books', (req,res) => {
   res.send(books);
});

app.post('/login', (req,res) => {
    const idname = req.body.idname,
          password = req.body.password;   
  if (idname=='myuser' && password == 'password') {
    books.push({
     "bookid": req.body.bookid,
     "bookname": req.body.bookname,
     "edition": req.body.edition
    });
    res.send(books);
  } else { 
    res.send ("idname or password doesn't match"+idname+password)
  }
});
      
app.put('/books', (req,res) => {
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
    const idname = req.body.idname,
          password = req.body.password;   
  if (idname == 'myuser' && password == 'password') {
    const bookid = req.body.bookid;
    books.forEach((book, i) => {
        if (books[i].bookid == bookid) {
               books.splice(i,1);
        }
    });
    res.send(books);
  } else { 
    res.send ("idname or password doesn't match"+idname+password)
  }
})

app.listen(4000, () => {
    console.log("server is listening on port 4000");
});

const express = require('express'),
app = express(),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

let register = [];

app.post('/signup', (req, res) => {
  register.push ({ 
    "username": req.body.username,
    "password": req.body.password, 
  });
  res.send(register);
});
/*
const register = [{ 
username:'man',
password:123 
},{
username:'women',
password:1234 
}];*/

app.post('/login', async (req,res) => {
  let count = 0;
    login = {
     "username": req.body.username,
     "password": req.body.password
    };
    register.map((item)=>{
      if(item.username === req.body.username && item.password === req.body.password){
       res.send("login");
       count++;
      }
    })
  if(count === 0) {
    res.send("no_user");
  }

}); 

app.listen(2000, () => {
console.log("server is listening on port 2000")
});
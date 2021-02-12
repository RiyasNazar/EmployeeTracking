const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/playersdb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.get('/players', (req,res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('playersdb');
    dbo.collection("playerslist").find({}).toArray( (err, result) => {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});

app.post('/players', (req,res) => {
    const id = req.body.id,
          name = req.body.name,
          runs = req.body.runs;
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('playersdb');
    const myobj = { idnumber: id , name: name, runs: runs };
    dbo.collection("playerslist").insertOne(myobj, (err, res) => {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  res.send();
});

app.put('/player/:id', (req,res) => {
    const id = req.body.id,
          name = req.body.name,
          runs = req.body.runs;
  MongoClient.connect(url, (err, db) => { 
    if (err) throw err;   
    const dbo = db.db('playersdb');
    const myobj = { idnumber: id };
    const myobj1 = { $set: {name: name, runs: runs}  };
    dbo.collection("playerslist").updateOne(myobj,myobj1,  (err, res) => {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
             
  });        
  res.send();
});

app.delete('/players', (req,res) => {
    const id = req.body.id;
  MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     const dbo = db.db('playersdb');
     const myobj = { idnumber: id };
      dbo.collection("playerslist").deleteOne(myobj, (err, res) => {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
      });
  });
  res.send();
});

app.listen(6000, () => {
    console.log("server is listening on port 6000");
});
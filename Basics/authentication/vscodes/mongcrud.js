const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/playersdb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('playersdb');
  var myobj = { idnumber: 01, name: "virat", runs: 1000 };
  dbo.collection("playerslist").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

app.get('/players', (req, res) => {
  res.send(dbo.getCollection('playerslist').find({}));
});

app.listen(5500, () => {
  console.log("server is listening on port 5500");
});

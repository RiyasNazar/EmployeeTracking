const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');
     mongoose.Promise = require('bluebird');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playerslistdb');

const promise = new Promise(function(resolve, reject) 
.then ( (res,error) => {
    console.log("Database created!");
    if (err) throw err;
    db.close();
    });

)
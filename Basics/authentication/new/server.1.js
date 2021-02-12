const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      mongoDB = require('mongodb'),
      app = express(), 
      db = require('./db'),
      Blog = require('./Blog'),
      BlogRoute = require('./BlogRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/db',db);
app.use('/blog', Blog);
app.use('/',BlogRoute);

mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.listen(5000, () => {
    console.log('Your node js server is running on PORT:',5000);
});
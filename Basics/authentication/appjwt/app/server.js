const express = require("express"),
      bodyParser = require('body-parser'),
      app = express();

const Blog = require('./routes/Blog.route');

const mongoose = require('mongoose');
const dbm = 'mongodb:';
const mongoDB = process.env.MONGODB_URI || dbm;
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));   

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/Blog', Blog);

app.listen(5000, () => {
  console.log('listening on port ' + 5000);
});
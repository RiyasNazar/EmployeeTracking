const express = require('express'),
      bodyParser = require('body-parser');

const product = require('./product'), 
      app = express();

const mongoose = require('mongoose');
const dev_db_url = 'mongodb:';
const mongoDB = process.env.MONGODB_URI ;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(4000, () => {
    console.log('Server is up and running on port numner ' + 4000);
});
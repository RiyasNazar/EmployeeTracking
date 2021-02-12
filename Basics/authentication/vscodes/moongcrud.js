const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/playerslistdb');

const name = process.env.DB_NAME,
      idnumber = process.env.DB_IDNUMBER,
      runs = process.env.DB_RUNS,
      dbname = process.env.DB_NAME;
 
const connectionString = `mongodb://${name}:${idnumber}@${runs}/${dbname}`;
 
function connect() {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
 
        let db = mongoose.connection;
        mongoose.connect(connectionString,{ useMongoClient: true });
 
        db.on('error', function (err) {
            if (err) {
                reject(err);
            }
        });
 
        db.once('open', function () {
            resolve();
        });
    });
}

const UserSchema = mongoose.Schema({
    name: String,
    idnumber:{ type: number},
    runs: { type :number}
});
mongoose.model('User', UserSchema);

app.get('/players', (req,res) => {
const user = theSavedUser;
return new Promise((resolve, reject) => {
    User.findById(user._id, (err, user) => {
        if (err	) {
            return reject(err.message);
        }

        return resolve(user);
    });
});
});

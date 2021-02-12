var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/playersDB';

MongoClient.connect(url, function(err, db) {
    var cursor = db.collection('players').find();
    cursor.each(function(err, doc) {
        console.log(doc);
    });
}); 
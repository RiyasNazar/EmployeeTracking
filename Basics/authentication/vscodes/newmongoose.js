const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/playerslistdb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(7000, () => {
    console.log("server is listening on port 7000");
});
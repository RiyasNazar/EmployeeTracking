
const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express(),
      apiRoutes = require("./routes/api-routes");
      app.use('/api', apiRoutes)

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/bloghub');
const db = mongoose.connection;
const port = process.env.PORT || 8008

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port,  () => {
    console.log("Running RestHub on port " + port);
});                                                                                                                                                                                                                                                                                                                                                                                                                                       
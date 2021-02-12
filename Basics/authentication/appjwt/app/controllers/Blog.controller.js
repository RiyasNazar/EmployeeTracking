const express = require("express"),
      app = express();

const Blog = require('../models/Blog.model');
app.use('/Blog', Blog);
exports.test = (req, res) => {
    res.send('Greetings from the Test controller!');
};

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const Blog = new Schema({
  blogname: {
    type: String
  },
  blogid: {
   type: Number
  }
},{
  collection: 'blogs'
});

module.exports = mongoose.model('Blog', Blog);

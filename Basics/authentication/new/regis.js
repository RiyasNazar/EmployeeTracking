const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const Register = new Schema({
  username: {
    type: String
  },
  password: {
   type: String
  }
},{
  collection: 'register'
});

module.exports = mongoose.model('register', Register);

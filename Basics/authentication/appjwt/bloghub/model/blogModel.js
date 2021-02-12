const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogname: {
        type: String,
        required: true
    },
    blogmail: {
        type: String,
        required: true,
        unique : true
    },
    creator: String,
    contact: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Blog = module.exports = mongoose.model('blog', blogSchema);
module.exports.get =  (callback, limit) => {
    Blog.find(callback).limit(limit);
}
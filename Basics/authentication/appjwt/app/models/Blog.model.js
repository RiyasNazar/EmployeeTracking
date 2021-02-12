const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    username: {type: String, required: true},
    password: {type: Number, required: true},
}, {collection: 'dbm'});

const BlogSchema = new Schema({
    blogname: {type: String, required: true},
    blogid: {type: Number, required: true},
}, {collection: 'dbm'});

const baseOptions = {
    discriminatorKey: '__type',
    collection: 'dbm'
}
const Base = mongoose.model('Base', new Schema({}, baseOptions)),
    RegistersModel = Base.discriminator('RegistersModel', RegisterSchema),
    BlogsModel = Base.discriminator('BlogsModel', BlogSchema);
    mongoose.model('BlogsModel', new Schema({})).find({}).then((a) => console.log(a));

module.exports = mongoose.model('Register', RegistersModel);
//module.exports = mongoose.model('Blog', BlogsModel);

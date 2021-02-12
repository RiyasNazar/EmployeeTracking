//profileModel.js
var mongoose = require('mongoose');
// Setup schema
var profileSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Profile model
var Profile = module.exports = mongoose.model('profile', profileSchema);
module.exports.get =  (callback, limit) => {
    Profile.find(callback).limit(limit);
}
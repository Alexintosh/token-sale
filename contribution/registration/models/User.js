
var mongoose = require('mongoose');

const {Schema} = mongoose;

mongoose.Promise = require('bluebird');

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    amount: { type: Number, required: true },
    residency: { type: Boolean, required: true },
    timestamp: { type: Number, default: Date.now }
}, { collection: 'registration' })

module.exports = mongoose.model('User', UserSchema);
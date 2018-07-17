// users schema ===================================
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: {type: String},
	password: {type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);

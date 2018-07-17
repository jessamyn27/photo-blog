// users schema ===================================
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  body: String,
});

module.exports = mongoose.model('User', userSchema);

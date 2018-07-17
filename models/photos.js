// photo schema ===================================
const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  name: String,
  body: String,
  image: String,
});

module.exports = mongoose.model('Photo', photoSchema);

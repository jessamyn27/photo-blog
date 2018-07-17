// photo schema ===================================
const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  username: {type: String, required: true},
  image: {type: String, required: true},
  body: {type: String},

});

module.exports = mongoose.model('Photo', photoSchema);

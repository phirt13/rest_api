const mongoose = require('mongoose');

var musherSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  experience: Number
});

module.exports = mongoose.model('Musher', musherSchema);

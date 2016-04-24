const mongoose = require('mongoose');

var doggieSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  breed: String,
  sledPosition: String,
  endurance: Number
});

module.exports = mongoose.model('Dog', doggieSchema);

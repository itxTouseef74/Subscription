const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  subscriptions: { type: [String], default: [] }
});

module.exports = mongoose.model('User', userSchema);

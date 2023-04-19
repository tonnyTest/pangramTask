const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  dob: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  otp: {
    type: String
  },
});

module.exports = mongoose.model("User", userSchema);

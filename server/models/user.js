const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
    required: "First Name is required",
  },
  lname:{
    type:String,
    trim:true,
    required:"Last Name is required",
    unique:true 
  },
  gender: {
    type: String,
    required: "Gender is required",
  },
  hobbies: {
    type: String,
    required: "Hobbies is required",
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    required: "password is required",
  },
  city: {
    type: String
  },
  employeeType: {
    type: String
  },
  department: {
    type: String
  },
  category: {
    type: String
  },
  salary: {
    type: String
  },
});

module.exports = mongoose.model("User", userSchema);

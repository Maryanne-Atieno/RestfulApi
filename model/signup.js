const mongoose = require("mongoose");

//NEW USER SIGN UP SCHEMA
const signUpSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("SignUp", signUpSchema);

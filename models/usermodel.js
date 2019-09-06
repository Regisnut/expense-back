const mongoose = require("mongoose");

//model User
const User = mongoose.model("User", {
  username: {
    type: String,
    // index: { unique: true, dropDups: true },
    default: "",
    minlength: 2,
    maxlength: 15,
    required: true
  }
});

module.exports = User;

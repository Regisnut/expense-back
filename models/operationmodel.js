const mongoose = require("mongoose");

//model Operation
const Operation = mongoose.model("Operation", {
  description: {
    type: String,
    default: "",
    minlength: 2,
    maxlength: 25,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  //model User
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = Operation;

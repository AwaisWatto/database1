const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name:  {
    type: String,
    required: "Please Enter First Name",
  },

  fatherName: {
    type: String,
    required: "Please Enter Last Name",
  },

  class: {
    type: String,
    required: "Please Enter Phone Number",
  },

  homeNumber: {
    type: String,
    required: "Please Enter Email",
  },

  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateUpdated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Student", studentSchema);

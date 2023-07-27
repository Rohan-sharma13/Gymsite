const mongoose = require("mongoose");

const membersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    default: "on hold",
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "none",
  },
  startingDate: {
    type: Date,
    default: Date.now(),
  },
  endingDate: {
    type: Date,
    default: new Date().setFullYear(new Date().getFullYear() + 1),
  },
  enrolled_in: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("AllMembers", membersSchema);

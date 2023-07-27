const mongoose = require("mongoose");

const coursesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  intensity: {
    type: Number,
    required: true,
  },
  students: {
    type: Number,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mentor: {
    type: String,
    required: true,
  },
  days: {
    type: Array,
    required: true,
  },
  timings: {
    type: Array,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startingDate: {
    type: Date,
    default: Date.now(),
  },
  endingDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("AllCourses", coursesSchema);

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  buyers: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("AllProducts", productSchema);

const mongoose = require("mongoose");

const subcribersSchema = mongoose.Schema({
  subscriberId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AllSubcribers", subcribersSchema);

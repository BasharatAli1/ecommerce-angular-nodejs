const mongoose = require('mongoose');
const dealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter deal name"]
    },
    description: {
        type: String,
    },
    discount_percentage: {
        type: Number,
        require: [true, "Please entre deal percentage"],
        maxLength: [8, "Max character limit exceed"]
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

module.exports = mongoose.model("Deal", dealSchema);

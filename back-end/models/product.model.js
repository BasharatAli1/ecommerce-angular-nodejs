const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        require: [true, "Please entre product price"],
    },
    deal_id: {
        type: mongoose.Types.ObjectId,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    stock: {
      type: Number,
      default: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);

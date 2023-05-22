const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  sale_price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    default: 18,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);

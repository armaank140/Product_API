const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type : String,
        required : true,
        trim : true

  },
  description: {
    type: String,
    required : true,
    trim : true
  },

  brand: {
    type: String,
    required : true,
    trim : true
  },
  model: {
    type: String,
    unique : true,
    required : true,
    trim : true
  },
  storage: {
    type: String,
    required : true,
    trim : true
  },
  ram: {
    type: String,
    required : true,
    trim : true
  },

  price: {
    type: Number,
    required : true,
    trim : true
  },
  sale_price: {
    type: Number,
    required : true,
    trim : true
  },
  stock: {
    type: Number,
    required : true,
    trim : true
  },
  tax: {
    type: Number,
    default: 18,
  },
  image: {
    type: String,
    trim : true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

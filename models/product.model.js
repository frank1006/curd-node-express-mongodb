const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  sku: {
    type: String,
    required: [true, "SKU is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },    
  color: {
    type: String,
    required: [true, "Color is required"]
  },    
  description: {
    type: String,
    required: [false, "Description is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  image: {
    type: String,
    required: [false, "Image is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

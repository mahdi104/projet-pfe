//require mongoose
const mongoose = require("mongoose");

//Create Product Schema

const schema = mongoose.Schema;
const ProductSchema = new schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);

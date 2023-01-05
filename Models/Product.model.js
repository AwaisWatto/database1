const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name:  {
    type: String,
    required: "Product Name",
  },

  description: {
    type: String,
    required: "Product Description",
  },

 price: {
    type: String,
    required: "Price",
  },

 image: {
    type: String,
    required: "Product Image",
  },

  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateUpdated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  prise: {
    type: "string",
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;

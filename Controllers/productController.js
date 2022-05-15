import express from "express";
import Product from "../Models/Products.js";

const router = express.Router();

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    if (!product) return res.status(404).send("Product not found");
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body });
    product.save((error, savedProduct) => {
      if (error) return res.status(400).send(error);
      return res.status(201).send(savedProduct);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(404).send("Product does not exits");

    const { product_code } = req.body;
    const checkProduct = await Module.findOne({ product_code });
    if (!checkProduct) return res.status(404).send("Product does not exits");
    await Product.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("Product updated");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(404).send("Product does not exits");
    await Product.deleteOne({ _id: req.params.id }, (error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send("Lecture deleted");
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default router;

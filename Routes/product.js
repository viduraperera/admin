import express from "express";
const router = express.Router();

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../Controllers/productController.js";

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

const express = require("express");
const router = express.Router();
const {
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct
} = require("../controllers/producte.controller");

// Get all products 
router.get("/", getProducts);

// Get a product by id
router.get("/:id", getProductById);

// Create a product
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;

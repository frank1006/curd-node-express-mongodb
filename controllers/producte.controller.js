/**
 * @module ProductController
 * @description Controller handling product-related operations
 */

/**
 * @typedef {import('../models/product.model')} Product
 */
const Product = require("../models/product.model");

/**
 * @function getProducts
 * @description Get all products
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>}
 */
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * @function getProductById
 * @description Get a product by id
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>}
 */
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * @function createProduct
 * @description Create a product
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>}
 */
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * @function updateProduct
 * @description Update a product
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>}
 */
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * @function deleteProduct
 * @description Delete a product
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>}
 */
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
}   

module.exports = { 
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
};
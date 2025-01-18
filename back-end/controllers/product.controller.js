import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ success: true, data: products });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");

    }
};

export const createProduct = async (req, res) => {
    const product = req.body; //user will send data 

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ msg: "Please provide all fields" });
    };
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({ success: true, date: newProduct });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID" });
    }

    try {
        const updatedproduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedproduct });

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });

    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }

};
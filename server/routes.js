const express=require("express")
const router=express.Router()
const Product = require('./models/Product');
router.post('/products', async (req, res) => {
    try {
      const productData = req.body; // Assuming you're sending product data in the request body
      const newProduct = await Product.create(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Error creating product' });
    }
  });

  router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  });

  module.exports=router
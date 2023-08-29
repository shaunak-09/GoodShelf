// index.js
const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/Product');
require('dotenv').config();
const app = express();
const port=process.env.PORT||8000
const mongourl=process.env.MONGODBURL||""
const cors=require("cors");
const bodyParser=require("body-parser")
const routes=require("./routes")

app.use(bodyParser.json());
app.use(cors({
    origin:'*'
}))
mongoose.connect(mongourl, 
{ useNewUrlParser: true, 
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// ...other app setup

app.use("/api",routes)

// app.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching products' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

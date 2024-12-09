// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./router/products.route");

// Middleware
const app = express();
app.use(express.json());

// app.use(express.urlencoded({extended: false})); // for form data

// Products routes
app.use("/api/products", productsRouter);

// Connect to database
const DB_URI = "<your-mongodb-uri>"; 
mongoose.connect(DB_URI)
.then(() => {
  console.log("Connected to database!");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})
.catch((err) => console.log(err));
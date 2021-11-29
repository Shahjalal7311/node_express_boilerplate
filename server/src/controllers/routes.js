const express = require('express');
const productRoutes = require('./product-controller');
const categoryRoutes = require('./category-controller');
const userRoutes = require('./user-controller');

let router = express.Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);

module.exports = router;
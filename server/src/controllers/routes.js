const express = require('express');
const productRoutes = require('./product-controller');
const categoryRoutes = require('./category-controller');
const router = express.Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
const express = require('express');
const productRoutes = require('./product-controller');
const categoryRoutes = require('./category-controller');
const userRoutes = require('./user-controller');
const loginRoutes = require('./auth-controller');
const auth = require('../middlewares/auth'); 

let router = express.Router();

router.use('/login', loginRoutes);
router.use("/products", auth, productRoutes);
router.use("/categories", auth, categoryRoutes);
router.use("/users", auth, userRoutes);

module.exports = router;
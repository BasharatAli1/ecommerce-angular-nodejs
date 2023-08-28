const express = require("express");
const { getAllProducts, createProduct, getProductsByDeal, deleteProduct, getProductDetails } = require("../controllers/product.controller");
const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/products/:dealId').get(getProductsByDeal);
router.route('/products/new').post(createProduct);

module.exports = router;
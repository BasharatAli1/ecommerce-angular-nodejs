const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/product.model");
const Deal = require("../models/deal.model");
const ErrorHandler = require("../utils/errorHandler");

exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

exports.getAllProducts = catchAsyncError(async (req, res) => {
    const result = await Product.find();
    // calculate discounted price here
    const products = [];
    for(let product of result) {
        const deal = await Deal.findById(product.deal_id);
        let discountedPrice = 0;
        if(deal && deal?.discount_percentage) {
            discountedPrice = product.price - (product.price * deal?.discount_percentage) / 100;
        }
        products.push({...(product.toJSON()), discountedPrice})
    }
    res.status(200).json({
        success: true,
        products
    });
});

exports.getProductsByDeal = catchAsyncError(async (req, res) => {
    const products = await Product.find({ deal_id: req.params.dealId });
    res.status(200).json({
        success: true,
        products
    });
});
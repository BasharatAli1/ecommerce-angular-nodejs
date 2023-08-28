const catchAsyncError = require("../middleware/catchAsyncError");
const Deal = require("../models/deal.model");
const mongoose = require('mongoose');
const ErrorHandler = require("../utils/errorHandler");

exports.createDeal = catchAsyncError(async (req, res, next) => {
    const deal = await Deal.create(req.body);
    res.status(201).json({
        success: true,
        deal
    });
});

exports.getAllDeals = catchAsyncError(async (req, res) => {
    const deals = await Deal.find();
    res.status(200).json({
        success: true,
        deals
    });
});

exports.getDealBasedProducts = catchAsyncError(async (req, res) => {
    const dealIdToSearch = mongoose.Types.ObjectId(req.params.dealId);
    const products = await Deal.aggregate([
      {
        $match: {
          _id: dealIdToSearch
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "deal_id",
          as: "products"
        }
      }
    ]);      
    res.status(200).json({
        success: true,
        products
    });
});
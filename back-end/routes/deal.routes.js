const express = require("express");
const { getAllDeals, createDeal, getDealBasedProducts } = require("../controllers/deal.controller");
const router = express.Router();

router.route('/deals').get(getAllDeals);
router.route('/deals/new').post(createDeal);
router.route('/deals/:dealId').get(getDealBasedProducts);

module.exports = router;
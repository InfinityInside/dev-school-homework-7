const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/:customer_id/orders', customerController.getOrders);

module.exports = router;
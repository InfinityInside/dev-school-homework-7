const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.delete('/:order_id', orderController.delete);

module.exports = router;
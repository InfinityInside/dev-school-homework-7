const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.patch('/:id', employeeController.update);

module.exports = router;
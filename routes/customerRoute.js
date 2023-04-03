const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.createCustomer);

router
    .route('/:id')
    .get(customerController.getCustomerById)
    .patch(customerController.updateCustomerById)
    .delete(customerController.deleteCustomerById);

module.exports = router;
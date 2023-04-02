const express  = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
    .route('/')
    .get(loanController.getAllLoans)
    .post(loanController.createLoan);

router
    .route('/:id')
    .get(loanController.getLoanById)
    .patch(loanController.updateLoanById)
    .delete(loanController.deleteLoanById);

module.exports = router;
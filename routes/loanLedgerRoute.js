const express = require('express');
const loanLedgerController = require('../controllers/loanLedgerController');
const router = express.Router();

router
    .route('/')
    .get(loanLedgerController.getAllLedgers)
    .post(loanLedgerController.createLedger);

router
    .route('/:id')
    .get(loanLedgerController.getLedgerById)
    .delete(loanLedgerController.deleteLedgerById);

module.exports = router;




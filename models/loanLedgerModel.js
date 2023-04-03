const mongoose = require('mongoose');

const loanLedgerSchema = new mongoose.Schema({
    paymentInPennies: {
        type: Number,
        required: true,
        immutable: true
    },
    accruedInterestInInt: {
        type: Number,
        required: true,
        min: [0, 'Interest cannot be zero'],
        max: [100, 'Interest cannot be greater than 100']

    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

const LoanLedger = mongoose.model('LoanLedger', loanLedgerSchema);

module.exports = LoanLedger;


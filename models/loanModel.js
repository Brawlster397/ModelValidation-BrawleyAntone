const mongoose = require('mongoose');
const {customerSchema} = require('./customerModel');


const loanSchema = new mongoose.Schema({
    
    loanType: {
        type: String,
        required: true,
        enum: ['home', 'auto', 'personal', 'business']
    },

    loanNum: {
        type: Number,
        required: true,
        unique: true, 
        min: 0,
        max: 50

    },

    amount: {
        type: Number,
        required: true,
        min: [0, `Value cannot be zero`],
        max: [10000000, `Value cannot exceed 100,000`] //10,000,000 / 100 = 100,000 dollars
    },

    interestRate: { //return json object assuming type transfer from 0.08 * 100 = 8
        type: Number, 
        required: true,
        min: 1,
        max: 100
    }, 
    loanTermMonths: { //loan term in months
        type: Number,
        required: true,
        min: [1, `Loan term needs to be > 1 month`],
        max: [360, `Loan term cannot exceed 30 years`]
    },

    startDate: {
        required: true,
        type: Date,
        validate: {
            validator: (value) => value >= Date.now(),
            message: 'start date must be in future.'//<<<<< not sure about this. May have to come back and look at this...
        }
    },

    createdAt: {
        type: Date, 
        immutable: true,
        default: () => Date.now()
    }, 

    //declare the relationship between a loan and a customer.
    customer: [customerSchema]

}); 

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;


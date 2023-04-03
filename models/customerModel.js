const mongoose = require('mongoose');
const loan = require('./loanModel');

const customerSchema = new mongoose.Schema({

    loanHolderFName: {
        type: String,
        minLength: [1, `Please make sure that the number of characters is greater than {MINLENGTH}`],
        maxLength: [25, `Please make sure that the number of characters does not exceed {MAXLENGTH}`],
        required: true
    },

    loanHolderLName: {
        type: String,
        minLength: [1, `Please make sure that the number of characters is greater than {MINLENGTH}`],
        maxLength: [25, `Please make sure that the number of characters does not exceed {MAXLENGTH}`],
        required: true
    },

    loanHolderDob: {
        type: Date,
        required: true,
        //Insert validator here to validate date of birth
        validate: {
            validator: (value) => value <= Date.now(),
            message: 'Date of birth must be in the past'
        }
    },
    loanHolderGender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    
    //Defining the relationship between the documents?? Something like that. 
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = {Customer, customerSchema};

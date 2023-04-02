const Loans = require('../models/loanModel');

exports.getAllLoans = async (req, res) => {
    try {

        const loans = await Loans.find({});

        res.status(200).json({
            status: 'success',
            results: loans.length,
            data: {
                loans
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}

exports.createLoan = async (req, res) => {
    try {

        const newLoan = await Loans.create(req.body);

        res.status(200).json({

            status: '200',
            data: {
                newLoan
            }
        });

    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}


exports.getLoanById = async (req, res) => {

    try {

        const loan = await Loans.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            info: {
                loan
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,

        })
    }
}

exports.updateLoanById = async (req, res) => {

    try {

        const updateData = await Loans.findOneAndUpdate(req.params.id, req.body);
        updateData;
        
        const updatedData = await Loans.findById(req.params.id);


        res.status(200).json({

            status: 'Update Successful',
            data: {
                updatedData
            }

        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });

    }

    

}

exports.deleteLoanById = async (req, res) => {

    try {
        const deleteData = await Loans.findByIdAndDelete(req.params.id);
        deleteData;

        res.status(200).json({
            status: 'Delete Successful',
        })


    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
    



}
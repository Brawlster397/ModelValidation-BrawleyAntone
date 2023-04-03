const Ledger = require('../models/loanLedgerModel');

exports.getAllLedgers = async (req, res) => {
    try {

        const ledgers = await Ledger.find({});

        res.status(200).json({
            status: 'success',
            results: ledgers.length,
            data: {
                ledgers
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}

exports.createLedger = async (req, res) => {
    try {

        const newLedger = await Ledger.create(req.body);

        res.status(200).json({

            status: '200',
            data: {
                newLedger
            }
        });

    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}


exports.getLedgerById = async (req, res) => {

    try {

        const ledger = await Ledger.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            info: {
                ledger
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,

        })
    }
}



exports.deleteLedgerById = async (req, res) => {

    try {
        const deleteData = await Ledger.findByIdAndDelete(req.params.id);
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
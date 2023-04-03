const Customer = require('../models/customerModel');

exports.getAllCustomers = async (req, res) => {
    try {

        const customers = await Customer.find({});

        res.status(200).json({
            status: 'success',
            results: customers.length,
            data: {
                customers
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}

exports.createCustomer = async (req, res) => {
    try {

        const newCustomer = await Customer.create(req.body);

        res.status(200).json({

            status: '200',
            data: {
                newCustomer
            }
        });

    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}


exports.getCustomerById = async (req, res) => {

    try {

        const customer = await Customer.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            info: {
                customer
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,

        })
    }
}

exports.updateCustomerById = async (req, res) => {

    try {

        const updateData = await Customer.findOneAndUpdate(req.params.id, req.body);
        updateData;
        
        const updatedData = await Customer.findById(req.params.id);


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

exports.deleteCustomerById = async (req, res) => {

    try {
        const deleteData = await Customer.findByIdAndDelete(req.params.id);
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
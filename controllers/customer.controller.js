const Customer = require('../models/customer.model');

const registerCustomer = async (req, res) => {
    console.log("success334534");
    const { name, email, address, salary, imageUri } = req.body;
    console.log(name, email, address, salary, imageUri);
    const customer = new Customer({name, email, address, salary, imageUri});
    console.log(customer);
    try {
        const result = await Customer.create({name, email, address, salary, imageUri});
        console.log("success ", result);
        if (result) {
            return res.status(201).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getCustomers = async (req, res) => {
    try {
        const result = await Customer.find();
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getCustomerById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Customer.findById(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateCustomer = async (req, res) => {
    const id = req.params.id;
    const { name, email, address, salary, imageUri } = req.body;
    try {
        const customer = new Customer({name, email, address, salary, imageUri});
        const result = await Customer.findByIdAndUpdate(id, customer);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteCustomer = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Customer.findByIdAndDelete(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {registerCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer}
const OrderDetails = require('../models/orderDetails.model');

const createOrderDetails = async (req, res) => {
    const { order, item, qty, discount } = req.body;
    const orderDetails = new OrderDetails({order, item, qty, discount});
    try {
        const result = await orderDetails.save();
        if (result) {
            return res.status(201).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getOrderDetails = async (req, res) => {
    try {
        const result = await OrderDetails.find();
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getOrderDetailsById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await OrderDetails.findById(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateOrderDetails = async (req, res) => {
    const id = req.params.id;
    const { order, item, qty, discount } = req.body;
    try {
        const result = await OrderDetails.findByIdAndUpdate(id, {order, item, qty, discount});
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteOrderDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await OrderDetails.findByIdAndDelete(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {createOrderDetails, getOrderDetails, getOrderDetailsById, updateOrderDetails, deleteOrderDetails}
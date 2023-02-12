const ordersModel = require('../models/orders.model');

const createOrder = async (req, res) => {
    const { orderDate, customer } = req.body;
    const order = new ordersModel({orderDate, customer});
    try {
        const result = await order.save();
        if (result) {
            return res.status(201).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getOrders = async (req, res) => {
    try {
        const result = await ordersModel.find();
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getOrderById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ordersModel.findById(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const { date, customer } = req.body;
    try {
        const result = await ordersModel.findByIdAndUpdate(id, {date, customer});
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ordersModel.findByIdAndDelete(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {createOrder, getOrders, getOrderById, updateOrder, deleteOrder}
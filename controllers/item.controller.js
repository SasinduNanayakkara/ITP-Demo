const Item = require('../models/item.model');

const createItem = async (req, res) => {
    const { itemCode, description, qtyOnHand, unitPrice } = req.body;
    const item = new Item({itemCode, description, qtyOnHand, unitPrice});
    try {
        const result = await item.save();
        if (result) {
            return res.status(201).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getItems = async (req, res) => {
    try {
        const result = await Item.find();
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const getItemById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Item.findById(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateItem = async (req, res) => {
    const id = req.params.id;
    const { itemCode, description, qtyOnHand, unitPrice } = req.body;
    try {
        const result = await Item.findByIdAndUpdate(id, {itemCode, description, qtyOnHand, unitPrice});
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteItem = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Item.findByIdAndDelete(id);
        if (result) {
            return res.status(200).send(result);
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {createItem, getItems, getItemById, updateItem, deleteItem}
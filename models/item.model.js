const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemCode: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qtyOnHand: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;
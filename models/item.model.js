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

module.exports = mongoose.model("Item", itemSchema);

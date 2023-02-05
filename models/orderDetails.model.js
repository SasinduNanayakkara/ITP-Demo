const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    qty: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model("OrderDetails", orderDetailsSchema);

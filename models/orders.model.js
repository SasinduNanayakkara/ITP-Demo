const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customerModel'
    },
    orderDate: {
        type: Date,
        required: true
    },

}, {timestamps: true});

const orderModel = mongoose.model("Orders", orderSchema);

module.exports = orderModel;
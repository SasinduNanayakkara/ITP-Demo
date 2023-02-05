const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    orderDate: {
        type: Date,
        required: true
    },

}, {timestamps: true});

module.exports = mongoose.model("Orders", orderSchema);

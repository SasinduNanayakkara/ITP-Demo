const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false,
    },
    salary: {
        type: Number,
        required: true
    },
    imageUri: {
        type: String,
        required: false
    }
}, {timestamps: true});

const customerModel = mongoose.model("Customer", customerSchema);

module.exports = customerModel;
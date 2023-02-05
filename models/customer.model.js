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

module.exports = mongoose.model("Customer", customerSchema);
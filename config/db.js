const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try {
        const dbConnection = await mongoose.createConnection(process.env.MONGO_URI);
        if (dbConnection) {
            console.log('MongoDB connected');
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
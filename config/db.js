const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try {
        const dbConnection = await mongoose.createConnection("mongodb+srv://DBAdmin:itppro123AA@braintech.mti5y.mongodb.net/BrainTechDB?retryWrites=true&w=majority");
        if (dbConnection) {
            console.log('MongoDB connected');
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
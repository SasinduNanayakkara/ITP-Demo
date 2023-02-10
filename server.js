const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customer.routes');
const itemRoutes = require('./routes/item.routes');
const orderRoutes = require('./routes/orders.routes');
const orderDetailsRoutes = require('./routes/orderDetails.routes');
const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

// Connect to database
connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

// Define routes
app.use('/api/customer', customerRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/orderDetails', orderDetailsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

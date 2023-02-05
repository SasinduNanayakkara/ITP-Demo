const { createOrderDetails, getOrderDetails, getOrderDetailsById, updateOrderDetails, deleteOrderDetails } = require('../controllers/orderDetails.controller');

const router = require('express').Router()

router.post("/", createOrderDetails);
router.get("/", getOrderDetails);
router.get("/:id", getOrderDetailsById);
router.put("/:id", updateOrderDetails);
router.delete("/:id", deleteOrderDetails);

module.exports = router;
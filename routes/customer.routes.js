const router = require('express').Router()
const { registerCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controllers/customer.controller')


router.post("/", registerCustomer);
router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
const { createItem, getItems, getItemById, updateItem, deleteItem } = require('../controllers/item.controller');

const router = require('express').Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
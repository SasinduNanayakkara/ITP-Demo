const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
  getItemByItemCode,
  deleteItemCode,
} = require('../controllers/item.controller');

const router = require('express').Router();

router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItemById);
router.get('/search/:itemCode', getItemByItemCode);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
router.delete('/delete/:id', deleteItemCode);

module.exports = router;

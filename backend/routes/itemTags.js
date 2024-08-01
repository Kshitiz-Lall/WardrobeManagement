const express = require('express');
const router = express.Router();
const itemTagController = require('../controllers/itemTagController');

router.post('/', itemTagController.createItemTag);
router.get('/', itemTagController.getItemTags);
router.get('/:id', itemTagController.getItemTag);
router.put('/:id', itemTagController.updateItemTag);
router.delete('/:id', itemTagController.deleteItemTag);

module.exports = router;

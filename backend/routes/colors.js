const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

router.post('/', colorController.createColor);
router.get('/', colorController.getColors);
router.get('/:id', colorController.getColor);
router.put('/:id', colorController.updateColor);
router.delete('/:id', colorController.deleteColor);

module.exports = router;

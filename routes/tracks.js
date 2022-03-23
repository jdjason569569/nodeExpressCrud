const express = require('express');
const { getItems, createItems, getItem, updateItems, deleteItems } = require('../controllers/tracks');
const router = express.Router();
const { validatorCreateItem } = require('../validators/tracks');

/**
 * Listar items
 */
router.get('/', getItems);
/**
 * Obterner detalle item
 */
router.get('/:id', getItem);
/**
 * crear un registro
 */
router.post('/', validatorCreateItem, createItems);
/**
 * actualizar un registro
 */
router.put('/:id', validatorCreateItem, updateItems);
/**
 * delete item
 */
router.delete('/:id', deleteItems);


module.exports = router;
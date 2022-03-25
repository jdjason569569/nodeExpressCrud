const express = require('express');
const { getItems, createItems, getItem, updateItems, deleteItems } = require('../controllers/tracks');
const router = express.Router();
const { validatorCreateItem } = require('../validators/tracks');
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');

/**
 * Listar items
 */
router.get('/', authMiddleware, checkRol(['admin']), getItems);
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
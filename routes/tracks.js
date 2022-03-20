const express = require('express');
const { getItems, createItems } = require('../controllers/tracks');
const router = express.Router();


router.get('/', getItems);

router.post('/', createItems);



module.exports = router;
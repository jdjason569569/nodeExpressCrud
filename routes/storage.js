const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = require('../utils/handleStorage');
const { createItem } = require('../controllers/storage');


router.post('/', uploadMiddleware.single('file'), createItem);


module.exports = router;
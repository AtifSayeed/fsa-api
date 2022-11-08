const express = require('express');
const router = express.Router();
const homeCntrl = require('./../Controller/ProductController');

router.get('/',homeCntrl.home)
router.get('/books',homeCntrl.books);

module.exports = router;
const express = require('express');
const { create } = require('../controllers/LostBook');
const router = express.Router();



//Create Book Loan
router.post('/', create);
module.exports = router;
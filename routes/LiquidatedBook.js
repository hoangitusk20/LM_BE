const express = require('express');
const { create } = require('../controllers/LiquidatedBook');
const router = express.Router();



//Create Liquidated Book 
router.post('/', create);
module.exports = router;
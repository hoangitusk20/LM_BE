const express = require('express');
const { create } = require('../controllers/LostBook');
const router = express.Router();



//Create Book Lost
router.post('/', create);
module.exports = router;
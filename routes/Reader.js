const express = require('express');
const router = express.Router();
const { create, getReaderById, update } = require('../controllers/Reader');

const Reader = require('../model/Reader');


//Create reader
router.post('/', create);
//Get reader
router.get('/:_id/', getReaderById);
//Update reader
router.put('/', update);


module.exports = router;
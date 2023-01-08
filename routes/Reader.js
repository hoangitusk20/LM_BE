const express = require('express');
const router = express.Router();
const { create, getReaderById, update, deleteReader, findAll, getReaderByName} = require('../controllers/Reader');

const Reader = require('../model/Reader');


//Create reader
router.post('/', create);
//Get reader
router.get('/all/', findAll);
router.get('/:_id/', getReaderById);
router.get('/', getReaderByName);
//Update reader
router.put('/', update);
//Delete reader
router.delete('/:_id/', deleteReader)

module.exports = router;
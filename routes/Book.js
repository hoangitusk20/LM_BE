const express = require('express');
const { create, findById, findByName, loan, returnBook, update, deleteBook } = require('../controllers/Book');
const router = express.Router();
const Book = require('../model/Book');


//Create Book
router.post('/', create);
//Get book
router.get('/:_id/', findById);
router.get('/', findByName);
// Update book state 
router.put('/loan/:_id/', loan);
router.put('/return/:_id/', returnBook) 
//Update book information
router.put('/:_id/', update)
//Delete book information 
router.delete('/:_id/', deleteBook)


module.exports = router;
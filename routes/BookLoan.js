const express = require('express');
const { loan,viewByReaderId, returnBook } = require('../controllers/BookLoan');
const router = express.Router();
const BookLoan = require('../model/BookLoan');


//Get reader with loanned books
router.get('/:id/', viewByReaderId);
//Create Book Loan
router.post('/', loan);
// Update Book Loan when return books
router.put('/', returnBook);


module.exports = router;
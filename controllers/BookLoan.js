const BookLoan = require('../model/BookLoan');
const Book = require('../model/Book');

require("core-js/actual/array/group-by");

const loan = async (req,res) =>{
    try {   
        let bookLoan = new BookLoan(req.body);
        const savedBook = await Book.findOneAndUpdate({_id: req.body.book}, {state: false});
        const savedBookLoan = await bookLoan.save();
        res.json({savedBookLoan, savedBook});
    } catch (error) {
        res.json({message:error});
    }
}


const viewByReaderId = async(req,res) =>{
    try {   
        let bookLoan = await BookLoan.find({reader_id: req.params.id, returnDate: null}).populate('book', '_id name genres author');
        for (i = 0 ; i < bookLoan.length ; i ++){
            bookLoan[i] = bookLoan[i].book;
        }
        res.status(200).json(bookLoan);
    } catch (error) {
        res.json({message:error});
    }
}

const returnBook = async (req,res) =>{
    try {   
        let bookReturn = await BookLoan.findOne({reader_id: req.body.reader_id, book: req.body.book, returnDate: null});
        const savedBook = await Book.findOneAndUpdate({_id: req.body.book}, {state: true});
        let late = new Date(req.body.returnDate).getDate() - bookReturn.loanDate.getDate();
        if (late <=0 ) late = 0;
        let updates = {returnDate: req.body.returnDate, lateCount: late};
        let savedBookLoan = await BookLoan.findOneAndUpdate({_id : bookReturn._id}, updates);
        res.status(200).json(savedBookLoan);

    } catch (error) {
        res.json({message:"Sách đã trả hoặc chưa mượn sách này"});
    }
}

module.exports = {loan, viewByReaderId, returnBook}
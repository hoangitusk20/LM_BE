const mongoose = require('mongoose');
const shortid = require('shortid');

const BookLoanSchema = mongoose.Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      }, 
    reader_id : {
        type: String,
        ref: "Reader"
    },
    book: {
        type: String,
        ref: "Book"
    },
    loanDate:{
        type: Date,
        default: () => Date.now()
    },
    returnDate:{
        type: Date,
        default: null
    },
    lateCount: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('BookLoan', BookLoanSchema);


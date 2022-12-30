const mongoose = require('mongoose');
const shortid = require('shortid');

const LostSchema = mongoose.Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      },
    bookName: {
        type: String,
    },
    bookId:{
        type: String,
        ref: "Book"
    },
    readerName: {
        type: String,
    },
    readerId:{
        type: String,
        ref: "Reader"
    },
    date:{
        type: Date,
        default: ()=>Date.now()
    },
    compensation:{
        type:Number
    },
    employee:{
        type:String
    }
    
});

 module.exports = mongoose.model('LostBook', LostSchema);


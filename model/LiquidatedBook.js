const mongoose = require('mongoose');
const shortid = require('shortid');

const LiquidatedBookSchema = mongoose.Schema({
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
    date:{
        type: Date,
        default: ()=>Date.now()
    },
    reason:{
        type:String,
    },
    employee:{
        type:String
    }
});

 module.exports = mongoose.model('LiquidatedBook', LiquidatedBookSchema);


const mongoose = require('mongoose');
const shortid = require('shortid');

const BookSchema = mongoose.Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      },
    name: {
        type: String,
        required: true
    },
    genres: {
        type: String,

    },
    author: {
        type: String,

    },
    year: {
        type: Number,

    },
    publisher: {
        type: String,
    },
    inputDate: {
        type: Date,
        default: () =>Date.now()
    },
    price: {
        type: Number,
    },
    importer: {
        type: String,
    },
    state:{
        type: Boolean,
        default: true // True means this book is available
    }
});

 module.exports = mongoose.model('Book', BookSchema);


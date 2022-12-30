const mongoose = require('mongoose');
const shortid = require('shortid');

const ReaderSchema = mongoose.Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      },
    name : {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    email: {
        type: String,

    },
    dateOfBirth: {
        type: Date,
    },
    address: {
        type: String,
    },
    createAt: {
        type: Date,
        default: () =>Date.now(),

    },
    createPerson: {
        type: String,
    },
    totalLoan:{
        type: Number,
        default: 0
    }
    
});

 module.exports = mongoose.model('Reader', ReaderSchema);


const mongoose = require('mongoose');
const shortid = require('shortid');

const EmployeeSchema = mongoose.Schema({
    _id: {
        'type': String,
        'default': shortid.generate
      }, 
    name : {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    degree: {
        type: String,
    },
    position: {
        type: String,
    },
    department: {
        type: String,
    },
});

 module.exports = mongoose.model('Employee', EmployeeSchema);


const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json())


//Import routes
const BookRoute = require('./routes/Book');
const ReaderRoute = require('./routes/Reader');
const EmployeeRoute = require('./routes/Employee');
const BookLoanRoute = require('./routes/BookLoan');
const LostBookRoute = require('./routes/LostBook');
const LiquidatedBookRoute = require('./routes/LiquidatedBook');
// ==============
app.use('/Book', BookRoute);
app.use('/Reader', ReaderRoute);
app.use('/Employee', EmployeeRoute);
app.use('/BookLoan', BookLoanRoute);
app.use('/LostBook', LostBookRoute);
app.use('/LiquidatedBook', LiquidatedBookRoute);


// Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, ()=> {
    console.log('Connected to database');
})

//Listen on port 9999 http://localhost:9999/
const PORT = 9999;

app.listen(PORT);
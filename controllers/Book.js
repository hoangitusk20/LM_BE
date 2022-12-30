const Book = require('../model/Book');

const create =async (req,res) =>{
    try {   
        let book = new Book(req.body);
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (error) {
        res.json({message:error});
    }
}


const findByName = async(req, res) =>{
    try {
        let name = req.query.name;
        console.log(req.query);
        let exactly = Boolean(req.query.exactly);
        let bookList; 
        if (exactly == true){
            bookList = await Book.find({ name: name });
            console.log(bookList);
        }
        else{
            let regex = new RegExp(`${name}`);
            bookList = await Book.find({ name: regex });
        }

        res.status(200).json(bookList);
    } catch (error) {
        console.log("error");
        res.json({message:error});
    }
}


const findById = async(req, res) =>{
    try {
        const book = await Book.find({ _id: req.params._id});
        res.status(200).json(book);
    } catch (error) {
        res.json({message:error});
    }
}

const loan = async(req, res) =>{
    try {
        const savedBook = await Book.findOneAndUpdate({_id: req.params._id}, {state: false});
        res.status(200).json(savedBook);
    } catch (error) {
        res.json({message:error});
    }
}

const returnBook = async(req, res) =>{
    try {
        const savedBook =  await Book.findOneAndUpdate({_id: req.params._id}, {state: true});
        res.status(200).json(savedBook);
    } catch (error) {
        res.json({message:error});
    }
}

const update = async(req, res)=>{
    try {
        const updates = {
            name : req.body.name,
            genres: req.body.genres,
            author: req.body.author,
            year: req.body.year,
            publisher: req.body.publisher,
            inputDate: req.body.inputDate,
            price: req.body.price,
            state: req.body.state
        }
        const savedBook =  await Book.findOneAndUpdate({_id: req.params._id}, updates);
        res.status(200).json(savedBook);
    } catch (error) {
        res.json({message:error});
    }
}

const deleteBook = async(req, res) =>{
    try {
        const savedBook =  await Book.findOneAndDelete({_id: req.params._id});
        res.status(200).json(savedBook);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = {findByName, create, findById, loan, returnBook, update, deleteBook}
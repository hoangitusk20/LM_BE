const LiquidatedBook = require('../model/LiquidatedBook');

const create =async (req,res) =>{
    try {
        console.log(req.body);
        let liquidatedBook = new LiquidatedBook(req.body);
        console.log(req.body);
        const savedLiquidatedBook = await liquidatedBook.save();
        res.json(savedLiquidatedBook);
    } catch (error) {
        res.json({message:error});
    }
}


module.exports = {create}
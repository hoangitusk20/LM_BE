const LostBook = require('../model/LostBook');

const create =async (req,res) =>{
    try {
        console.log(req.body);
        let lostBook = new LostBook(req.body);
        console.log(req.body);
        const savedLostBook = await lostBook.save();
        res.json(savedLostBook);
    } catch (error) {
        res.json({message:error});
    }
}


module.exports = {create}
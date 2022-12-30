const Reader = require('../model/Reader');


const create =async (req,res) =>{
    try {
        let reader = new Reader(req.body);
        const savedReader = await reader.save();
        res.json(savedReader);
    } catch (error) {
        res.json({message:error});
    }
}

const getReaderById = async(req, res) =>{
    try {
        console.log(req.params);
        let reader = await Reader.findOne({_id: req.params._id});
        res.status(200).json(reader);
    } catch (error) {
        res.json({message:error});
    }
}

const update = async(req, res) =>{
    try {
        const updates = {
            email: req.body.email,
            address: req.body.address,
            createAt: req.body.createAt,
            totalLoan: req.body.totalLoan,
            name: req.body.name,
            type: req.body.type,
            dateOfBirth: req.body.dateOfBirth,
            createPerson: req.body.createPerson,
        }
        console.log(updates);
        const savedReader = await Reader.findOneAndUpdate({_id: req.body._id}, updates);
        res.status(200).json(savedReader);
    } catch (error) {
        res.json({message:error});
    }
}
module.exports = {create, getReaderById, update}
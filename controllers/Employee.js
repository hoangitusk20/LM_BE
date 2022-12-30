const Employee = require('../model/Employee');

const create =async (req,res) =>{
    try {
        let employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.json(savedEmployee);
    } catch (error) {
        res.json({message:error});
    }
}

const getEmployeeByName = async(req, res)=>{
    try {
        let name = req.query.name;
        console.log(name);
        const employee = await Employee.find({ name: name });
        res.status(200).json(employee);
    } catch (error) {
        console.log("error");
        res.json({message:error});
    }
}

module.exports = {create, getEmployeeByName}
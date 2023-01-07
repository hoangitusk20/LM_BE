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
        const employee = await Employee.find({ name: req.params._name });
        res.status(200).json(employee);
    } catch (error) {
        console.log("error");
        res.json({message:error});
    }
}

const update = async(req, res)=>{
    try {
        const updates = {
            name: req.body.name,
            address:req.body.address,
            phoneNumber: req.body.phoneNumber,
            dateOfBirth: req.body.dateOfBirth,
            degree: req.body.degree,
            position: req.body.position,
            department: req.body.department
        }
        const savedEmployee =  await Employee.findOneAndUpdate({_id: req.params._id}, updates);
        res.status(200).json(savedEmployee);
    } catch (error) {
        res.json({message:error});
    }
}

const deleteEmployee = async(req, res) =>{
    try {
        const savedEmployee =  await Employee.findOneAndDelete({_id: req.params._id});
        res.status(200).json(savedEmployee);
    } catch (error) {
        res.json({message:error});
    }
}

const findEmployeeByDepartment = async(req, res) =>{
    try {
        const employee = await Employee.find({ department: req.params._department });
        res.status(200).json(employee);
    } catch (error) {
        console.log("error");
        res.json({message:error});
    }
}

module.exports = {create, getEmployeeByName, update, deleteEmployee, findEmployeeByDepartment}
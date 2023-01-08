const express = require('express');
const { create, getEmployeeByName, update, deleteEmployee, findEmployeeByDepartment, findAll } = require('../controllers/Employee');
const router = express.Router();
const Employee = require('../model/Employee');


// Create employee
router.post('/', create);
//Get Employee
router.get('/all/', findAll);
router.get('/', getEmployeeByName);
router.get('/department/:department/', findEmployeeByDepartment);
// Update Employee information
router.put('/:_id/', update);
//Delete Employee 
router.delete('/:_id/', deleteEmployee);
module.exports = router;
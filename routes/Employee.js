const express = require('express');
const { create, getEmployeeByName, update, deleteEmployee, findEmployeeByDepartment } = require('../controllers/Employee');
const router = express.Router();
const Employee = require('../model/Employee');


// Create employee
router.post('/', create);
//Get Employee
router.get('/name/:_name/', getEmployeeByName);
router.get('/department/:_department/', findEmployeeByDepartment);
// Update Employee information
router.put('/:_id/', update);
//Delete Employee 
router.delete('/:_id/', deleteEmployee);
module.exports = router;
const express = require('express');
const { create, getEmployeeByName, update, deleteEmployee } = require('../controllers/Employee');
const router = express.Router();
const Employee = require('../model/Employee');


// Create employee
router.post('/', create);
//Get Employee
router.get('/', getEmployeeByName);
// Update Employee information
router.put('/:_id/', update);
//Delete Employee 
router.delete('/:_id/', deleteEmployee);
module.exports = router;
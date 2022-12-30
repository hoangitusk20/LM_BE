const express = require('express');
const { create, getEmployeeByName } = require('../controllers/Employee');
const router = express.Router();
const Employee = require('../model/Employee');


// Create employee
router.post('/', create);
//Get Employee
router.get('/', getEmployeeByName);

module.exports = router;
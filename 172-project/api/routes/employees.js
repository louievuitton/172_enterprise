const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require("../models/employee");

//get all employees
router.get('/', (req, res, next) => {
    Employee.find()
    .select("_id firstName lastName salary branch designation")
    .exec()
    .then(doc => {
        const response = {
            count: doc.length,
            employees: doc.map(doc => {
                return {
                    _id: doc._id,
                    firstName: doc.firstName,
                    lastName: doc.lastName,
                    salary: doc.salary,
                    branch: doc.branch,
                    designation: doc.designation,
                    request: {
                        type: 'GET',
                        //url: 'http://localhost:3000/employees/' + doc._id
                    }
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

//input new employee
router.post('/', (req, res, next) => {
    const employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        salary: req.body.salary,
        branch: req.body.branch,
        designation: req.body.designation
    });
    //this will store data in the database
    employee
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Employee inputted successfully..",
            createdEmployee: {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                salary: result.salary,
                branch: result.branch,
                designation: result.designation,
                request: {
                    type: 'POST',
                    //url: 'http://localhost:3000/employees/' + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

// //get specific employee
// router.get('/:employeeId', (req, res, next) => {
//     const id = req.params.employeeId;
//     Employee.findById(id)
//         .select('_id name gross')
//         .exec()
//         .then(doc => {
//             console.log("From database", doc);
//             if (doc) {
//                 res.status(200).json(doc);
//             }
//             else {
//                 res.status(404).json({message: "No valid entry found for provided ID"});
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({error: err});
//         });
// });

//delete specific employee
router.delete('/:employeeId', (req, res, next) => {
    const id = req.params.employeeId;
    Employee.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;
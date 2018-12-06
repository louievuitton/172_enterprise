const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    salary: { type: Number, required: true },
    branch: { type: String, required: true},
    designation: { type: String, required: true}
});

module.exports = mongoose.model("Employee", employeeSchema);
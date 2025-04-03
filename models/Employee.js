const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String},
    position: { type: String},
    salary: { type: Number},
}, 
{ collection: "employee_collection"});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
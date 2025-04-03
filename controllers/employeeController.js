const Employee = require("../models/Employee");

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees", error });
    }
};

// Get a single employee
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: "Employee not found" });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: "Error fetching employee", error });
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const { name, email, position, salary } = req.body;
        const newEmployee = new Employee({ name, email, position, salary });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: "Error creating employee", error });
    }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
    try {
        const { name, email, position, salary } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, position, salary },
            { new: true }
        );
        if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: "Error updating employee", error });
    }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) return res.status(404).json({ message: "Employee not found" });
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee", error });
    }
};

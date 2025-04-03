const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// To parse the request bodies
app.use(express.json());

dotenv.config();

// Employee API Routes
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


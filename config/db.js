const mongoose = require("mongoose");
const dotenv = require("dotenv");

// To load environment variables from a .env file into process.env
dotenv.config();

console.log(`===== Mongo DB connection =====`);
// mongodb://localhost:27017/user_database
async function mongoConnection(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("====== Connection successfully ==========");   
    } catch (error) {
        console.log(error);
    }
}
mongoConnection();
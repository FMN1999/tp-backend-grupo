const mongoose = require ("mongoose");
require("dotenv").config();

const dbConection = mongoose
    .connect(process.env.MONGODB_URI) 
    .then(() => console.log("Conectado a MongoDB Atlas")) 
    .catch((error) => console.error(error)); 

module.exports = dbConection;
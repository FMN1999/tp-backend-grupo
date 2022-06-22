const mongoose = require ("mongoose");
const uri = "mongodb+srv://usuario:contraseña@ttads.tbykf.mongodb.net/tienda_ropa?retryWrites=true&w=majority";

const dbConection = mongoose
    .connect(uri) 
    .then(() => console.log("Conectado a MongoDB Atlas")) 
    .catch((error) => console.error(error)); 

module.exports = dbConection;
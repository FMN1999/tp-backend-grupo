const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = mongoose
    .connect(process.env.MONGODB_URI)
    .then( () => console.log("Conexión a MongoDB Atlas exitosa") )
    .catch( () => console.error(error) )

module.exports = dbConnection;
const mongoose = require('mongoose');

const empleadoSchema = mongoose.Schema({
    legajo: {
        type: Integer,
        required:true
    },
    nombre: {
        type: String,
        required:true
    },
    apellido: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('empleado', empleadoSchema);
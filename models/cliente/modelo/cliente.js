const mongoose = require ("mongoose");

const clientSchema = mongoose.Schema({
    apellido: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    nombre: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Cliente', clientSchema);
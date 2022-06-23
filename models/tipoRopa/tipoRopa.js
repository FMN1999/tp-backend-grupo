const mongoose = require('mongoose');

const tipoRopaSchema = mongoose.Schema({
    detalle: String
})

module.exports = mongoose.model('tipoRopa', tipoRopaSchema);
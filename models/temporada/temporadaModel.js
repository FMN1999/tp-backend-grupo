const mongoose = require('mongoose');

const temporadaSchema = mongoose.Schema({
    detalle: String, 
    fechaDesde: String, 
    fechaHasta: String
})

module.exports = mongoose.model('temporada', temporadaSchema);
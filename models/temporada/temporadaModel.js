const mongoose = require('mongoose');
const temporadaSchema = mongoose.Schema({
    detalle: {
        type:String, 
        required:true
    }, 
    fechaDesde: {
        type:String, 
        required:true
    }, 
    fechaHasta: {
        type:String, 
        required:true
    } 
})

module.exports = mongoose.model('temporada', temporadaSchema);
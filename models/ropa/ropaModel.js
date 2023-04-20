const mongoose = require('mongoose');
const ropaSchema = mongoose.Schema({
    marca: {
        type:String,  
        required:true
    }, 
    categoria: {
        type: String,
        required:true
    },
    talle: {
        type: String,
        required:true
    }, 
    detalle: {
        type:String, 
        required:true
    }, 
    tipoRopa: {type: mongoose.Schema.Types.ObjectId, ref: 'tipoRopa', required:true}, 
    temporada: {type: mongoose.Schema.Types.ObjectId, ref: 'temporada', required:true}, 
    precioRopa: {type: mongoose.Schema.Types.ObjectId, ref: 'PrecioRopa', required:true}
})

module.exports = mongoose.model('ropa', ropaSchema);
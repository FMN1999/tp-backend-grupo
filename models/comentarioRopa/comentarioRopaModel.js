const mongoose = require('mongoose');

const comentarioRopaSchema = mongoose.Schema({
    detalle: {
        type:String, 
        required:true
    }, 
    idRopa: {type: 
        mongoose.Schema.Types.ObjectId, 
        ref: 'Ropa', 
        required:true
    }, 
    nombreUsuario: {
        type:String, 
        required:true
    }, 
    apellidoUsuario: {
        type:String, 
        required:true
    },
    fecha: {
        type:String, 
        required:true
    }  
})

module.exports = mongoose.model('comentarioRopa', comentarioRopaSchema);
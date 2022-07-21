//Importo el paquete de mongoose
const mongoose = require('mongoose');

//Creo el schema que luego me servirá para trabajar con el modelo
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
    tipoRopa: {type: mongoose.Schema.Types.ObjectId, ref: 'tipoRopa', required:true}
})

//Convierto el schema a modelo y lo importo para así poder trabajar desde otros archivos.
module.exports = mongoose.model('ropa', ropaSchema);
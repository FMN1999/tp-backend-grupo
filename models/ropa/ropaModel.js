//Importo el paquete de mongoose
const mongoose = require('mongoose');

//Creo el schema que luego me servirá para trabajar con el modelo
const ropaSchema = mongoose.Schema({
    marca: String, 
    categoria: String, 
    talle: String, 
    detalle: String
})

//Convierto el schema a modelo y lo importo para así poder trabajar desde otros archivos.
module.exports = mongoose.model('ropa', ropaSchema);
const mongoose = require ("mongoose");

const precioRopaSchema = mongoose.Schema({
    //importe: Number, 
    importe: {
        type: Number,
        required:true
    }, 
    fechaDesde: {
        type: String,
        required:true
    },
    idRopa: {type: mongoose.Schema.Types.ObjectId, ref: 'ropa', required:true}
});

module.exports = mongoose.model('PrecioRopa', precioRopaSchema);
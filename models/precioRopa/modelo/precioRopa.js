const mongoose = require ("mongoose");

const precioRopaSchema = mongoose.Schema({
    importe: {
        type: Number,
        required:true
    },
    fechaDesde: {
        type: Date,
        required:true
    },
    idRopa: {
        type: mongoose.Types.ObjectId,
        required:true
    }
});

module.exports = mongoose.model('PrecioRopa', precioRopaSchema);
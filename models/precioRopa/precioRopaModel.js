const mongoose = require ("mongoose");

const precioRopaSchema = mongoose.Schema({ 
    importe: {
        type: Number,
        required:true
    }, 
    fechaDesde: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model('PrecioRopa', precioRopaSchema);
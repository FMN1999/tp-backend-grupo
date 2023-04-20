const mongoose = require ("mongoose");
const precioRopaModel = mongoose.Schema({ 
    importe: {
        type: Number,
        required:true
    }, 
    fechaDesde: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model('PrecioRopa', precioRopaModel);
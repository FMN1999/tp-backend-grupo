const express = require("express");
const precioRopaSchema = require("./precioRopaModel");

const router = express.Router();
const { Response } = require('../../response');


//getAll
router.get ("/preciosRopa", async(req, res) => {
    try {
        let preciosRopa = await precioRopaSchema.find();
        Response.success(res, 200, 'Listado de precios de ropas', preciosRopa);
    } catch (error) {
        Response.error(res);
    }
});


//create
router.post ("/preciosRopa", (req, res) => {
    const preciosRopa = precioRopaSchema(req.body); 
    preciosRopa
        .save() 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


//getById
router.get ("/preciosRopa/:id", (req, res) => {   
    const { id } = req.params; 
    precioRopaSchema
        .findById(id) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


//update
router.put ("/preciosRopa/:id", (req, res) => {   
    const { id } = req.params; 
    const { importe, fechaDesde, ropa } = req.body; 
    precioRopaSchema
        .updateOne({ _id: id}, { $set: {importe, fechaDesde, ropa} })  
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});



//delete
router.delete ("/preciosRopa/:id", (req, res) => {   
    const { id } = req.params; 
    precioRopaSchema
        .remove({ _id: id}) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

module.exports = router;

const express = require("express");
const clientSchema = require("./clienteModel");
const router = express.Router();


const { Response } = require('../../response');


//Para crearlo
router.post ("/", (req, res) => {
    const client = clientSchema(req.body); 
    client
        .save() 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


//GetAll
router.get("/", async(req, res) => {
    try {
        let clientes = await clientSchema.find();
        Response.success(res, 200, 'Listado de clientes', clientes);
    } catch (error) {
        Response.error(error);
    }
})


//Para buscar por id
router.get ("/:id", (req, res) => {   
    const { id } = req.params; 
    clientSchema
        .findById(id) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


//Para modificar
router.put ("/:id", (req, res) => {
    const { id } = req.params; 
    const { apellido, email, nombre } = req.body; 
    clientSchema
        .updateOne({ _id: id}, { $set: {apellido, email, nombre} })  
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

//Para eliminar
router.delete ("/:id", (req, res) => {   
    const { id } = req.params; 
    clientSchema
        .remove({ _id: id}) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


module.exports = router;

const express = require("express");
const clientSchema = require("../modelo/cliente");
const router = express.Router();


const { Response } = require('../../../response');

const createError = require('http-errors');


//Para crearlo
router.post ("/clientes", (req, res) => {
    const client = clientSchema(req.body); 
    client
        .save() 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


//GetAll
router.get("/clientes", async(req, res) => {
    try {
        let clientes = await clientSchema.find();
        Response.success(res, 200, 'Listado de clientes', clientes);
    } catch (error) {
        Response.error(error);
    }
})


//Para buscar por id
router.get ("/clientes/:id", (req, res) => {   
    const { id } = req.params; 
    clientSchema
        .findById(id) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


//Para modificar
router.put ("/clientes/:id", (req, res) => {   
    const { id } = req.params; 
    const { apellido, email, nombre } = req.body; 
    clientSchema
        .updateOne({ _id: id}, { $set: {apellido, email, nombre} })  
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

//Para eliminar
router.delete ("/clientes/:id", (req, res) => {   
    const { id } = req.params; 
    clientSchema
        .remove({ _id: id}) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});


module.exports = router;

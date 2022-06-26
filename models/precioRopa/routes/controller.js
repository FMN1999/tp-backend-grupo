const express = require("express");
const precioRopaSchema = require("../modelo/precioRopa");

const router = express.Router();

router.post ("/preciosRopa", (req, res) => {
    const preciosRopa = precioRopaSchema(req.body); 
    preciosRopa
        .save() 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

router.get ("/preciosRopa", (req, res) => {   
    precioRopaSchema
        .find() 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

router.get ("/preciosRopa", (req, res) => {   
    precioRopaSchema
        .find() 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

router.get ("/preciosRopa/:id", (req, res) => {   
    const { id } = req.params; 
    precioRopaSchema
        .findById(id) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

router.put ("/preciosRopa/:id", (req, res) => {   
    const { id } = req.params; 
    const { importe, fechaDesde, idRopa } = req.body; 
    precioRopaSchema
        .updateOne({ _id: id}, { $set: {importe, fechaDesde, idRopa} })  
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

router.delete ("/preciosRopa/:id", (req, res) => {   
    const { id } = req.params; 
    precioRopaSchema
        .remove({ _id: id}) 
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ message:error })); 
});

module.exports = router;

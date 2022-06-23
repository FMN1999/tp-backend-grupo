const express = require('express');
const tipoRopa = require('./tipoRopa');

const router = express.Router();


//Esto para el create
router.post('/', (req, res) => {
    const tr = tipoRopa(req.body);
    tr
        .save()
        .then((data) => res.json(data))
        .catch( (error) => res.json({message:error}));
});

//Esto es para el getAll
router.get("/tiposRopa", (req, res) => {
    tr
        .find()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json({message:error}) );
})


//Esto es para el update
router.put("tiposRopa/:id", (req, res) => {
    const {id} = req.params;
    const {detalle} = req.body;
    tr
        .updateOne({_id: id}, { $set: {detalle}})
        .then( (data) => res.json(data))
        .catch( (error) => res.json({message:error}) );
})


//Esto es para el delete
router.delete("tiposRopa/:id", (req, res) => {
    const {id} = req.params;
    tr
        .remove({_id:id})
        .then( (data) => res.json(data))
        .catch( (error) => res.json({message:error}));
})

module.exports = router;
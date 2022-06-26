const express = require('express');
const temporada = require('./temporada');

const router = express.Router();


//Esto para el create
router.post('/', (req, res) => {
    const tempo = temporada(req.body);
    tempo
        .save()
        .then((data) => res.json(data))
        .catch( (error) => res.json({message:error}));
});

//Esto es para el getAll
router.get("/temporadas", (req, res) => {
    temporada
        .find()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json({message:error}) );
})


//Esto es para el update
router.put("temporadas/:id", (req, res) => {
    const {id} = req.params;
    const {detalle, fechaDesde, fechaHasta} = req.body;
    temporada
        .updateOne({_id: id}, { $set: {detalle, fechaDesde, fechaHasta}})
        .then( (data) => res.json(data))
        .catch( (error) => res.json({message:error}) );
})


//Esto es para el delete
router.delete("temporadas/:id", (req, res) => {
    const {id} = req.params;
    temporada
        .remove({_id:id})
        .then( (data) => res.json(data))
        .catch( (error) => res.json({message:error}));
})

module.exports = router;
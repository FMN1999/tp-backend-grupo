const express = require('express');

const router = express.Router();

const {temporadaServices} = require('./temporadaServices');

//getAll
router.get("/", temporadaServices.getAll);

//create
router.post('/', temporadaServices.create);

//getById
router.get('/:id', temporadaServices.getById);

//getByDetalle
router.get('/temporada/:detail', temporadaServices.getByDetalle);

//update
router.put('/:id', temporadaServices.update);

//delete
router.delete("/:id", temporadaServices.delete)

module.exports = router;
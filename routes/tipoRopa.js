const express = require('express');

const router = express.Router();

const {tipoRopaServices} = require('../models/tipoRopa/tipoRopaServices');

//getAll
router.get("/", tipoRopaServices.getAll);

//create
router.post('/', tipoRopaServices.create);

//getById
router.get('/:id', tipoRopaServices.getById);

//update
router.put("/:id", tipoRopaServices.update);

//getByDetalles
router.get('/tipoRopa/:detail', tipoRopaServices.getByDetalles);

//delete
router.delete("/:id", tipoRopaServices.delete);

module.exports = router;
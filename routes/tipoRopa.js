const express = require('express');
const router = express.Router();
const {tipoRopaServices} = require('../models/tipoRopa/tipoRopaServices');

router.get("/", tipoRopaServices.getAll);
router.post('/', tipoRopaServices.create);
router.get('/:id', tipoRopaServices.getById);
router.put("/:id", tipoRopaServices.update);
router.get('/tipoRopa/:detail', tipoRopaServices.getByDetalles);
router.delete("/:id", tipoRopaServices.delete);

module.exports = router;
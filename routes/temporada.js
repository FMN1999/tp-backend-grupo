const express = require('express');
const router = express.Router();
const {temporadaServices} = require('../models/temporada/temporadaServices');

router.get("/", temporadaServices.getAll);
router.post('/', temporadaServices.create);
router.get('/:id', temporadaServices.getById);
router.get('/temporada/:detail', temporadaServices.getByDetalle);
router.put('/:id', temporadaServices.update);
router.delete("/:id", temporadaServices.delete)

module.exports = router;
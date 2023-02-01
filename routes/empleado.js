const express = require('express');

const router = express.Router();

const {empleadoServices} = require('../models/empleado/empleadoServices');


router.get("/", empleadoServices.getAll)

router.post('/', empleadoServices.create);

router.get ("/:id", empleadoServices.getById);

router.put ("/:id", empleadoServices.update);

router.delete ("/:id", empleadoServices.delete);

module.exports = router;
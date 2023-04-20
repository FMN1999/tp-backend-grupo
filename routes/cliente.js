const express = require('express');
const router = express.Router();
const {clienteServices} = require('../models/cliente/clienteServices');

router.get("/", clienteServices.getAll)
router.post ("/", clienteServices.create);
router.get ("/:id", clienteServices.getById);
router.put ("/:id", clienteServices.update);
router.delete ("/:id", clienteServices.delete);

module.exports = router;

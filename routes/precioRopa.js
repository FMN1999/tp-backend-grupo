const express = require("express");
const router = express.Router();
const {precioRopaServices} = require('../models/precioRopa/precioRopaServices');

router.get ("/", precioRopaServices.getAll);
router.post ("/", precioRopaServices.create);
router.get ("/:id", precioRopaServices.getById);
router.put ("/:id", precioRopaServices.update);
router.delete ("/:id", precioRopaServices.delete);
router.get('/precioRopa/:amount', precioRopaServices.getByImporte);

module.exports = router;

const express = require("express");

const router = express.Router();

const {precioRopaServices} = require('../models/precioRopa/precioRopaServices');



//getAll
router.get ("/", precioRopaServices.getAll);


//create
router.post ("/", precioRopaServices.create);


//getById
router.get ("/:id", precioRopaServices.getById);


//update
router.put ("/:id", precioRopaServices.update);


//delete
router.delete ("/:id", precioRopaServices.delete);

//getByImporte
router.get('/precioRopa/:amount', precioRopaServices.getByImporte);


module.exports = router;

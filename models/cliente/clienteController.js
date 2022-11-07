const express = require('express');

const router = express.Router();

const {clienteServices} = require('./clienteServices');


//getAll
router.get("/", clienteServices.getAll)

//create
router.post ("/", clienteServices.create);


//getById
router.get ("/:id", clienteServices.getById);


//update
router.put ("/:id", clienteServices.update);

//delete
router.delete ("/:id", clienteServices.delete);



module.exports = router;

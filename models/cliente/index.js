const express = require('express');

const router = express.Router();

const { ClienteController } = require('./controller');

module.exports.ClienteAPI = (app) => {

    router
    .get('/', ClienteController.getClientes)

    .get('/:id', ClienteController.getCliente)

    .post('/', ClienteController.createCliente)

    .put('/:id', ClienteController.updateCliente)

    .delete('/:id', ClienteController.dropCliente)

    app.use('/api/clientes', router);

    
}
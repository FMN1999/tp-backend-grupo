const express = require('express');

const router = express.Router();

const { EmpleadoController } = require('./controller');



module.exports.EmpleadoAPI = (app) => {

    router
        .get('/', EmpleadoController.getEmpleado)
        .get('/:id', EmpleadoController.getEmpleado)
        .post('/', EmpleadoController.createEmpleado)

    app.use('/api/empleados', router);
}
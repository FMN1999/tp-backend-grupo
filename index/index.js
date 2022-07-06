const express = require('express');

const {Response} = require('../response');

const createError = require('http-errors');

module.exports.IndexAPI = (app) => {

    const router = express.Router();

    router.get("/", (req, res) => {
        const menu = {
            temporadas: `http://${req.headers.host}/api/temporadas`, 
            ropas: `http://${req.headers.host}/api/ropas`, 
            precioRopas: `http://${req.headers.host}/api/preciosRopa`,
            empleados: `http://${req.headers.host}/api/empleados`,
            clientes: `http://${req.headers.host}/api/clientes`,
            tiposRopa: `http://${req.headers.host}/api/tiposRopa`
        }

        Response.success(res, 200, "API Tienda_Ropa", menu);
    })

    app.use("/", router);

}

module.exports.NotFoundAPI = (app) => {

    //Creo el objeto router
    const router = express.Router();

    //Cualquier petición inexistente en nuestra aplicación que llegue. Todas las rutas que 
    //lleguen con cualquier verbo que no tengamos definidos ó controlados en nuestra aplicación, 
    //que responda con este controlador
    router.all('*', (req, res) => {
        Response.error(res, new createError.NotFound());
    })

    app.use("/", router);
}
const express = require('express');

const {Response} = require('../response');

const createError = require('http-errors');

module.exports.IndexAPI = (app) => {

    const router = express.Router();

    router.get("/", (req, res) => {
        const menu = {
            temporadas: `http://${req.headers.host}/api/temporadas`, 
            ropas: `http://${req.headers.host}/api/ropas`, 
            precioRopas: `http://${req.headers.host}/api/preciosRopa`
        }

        Response.success(res, 200, "API Tienda_Ropa", menu);
    })

    app.use("/", router);

}
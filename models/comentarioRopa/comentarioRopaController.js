const express = require('express');

const comentarioRopaModel = require('./comentarioRopaModel');

const { Response } = require('../../response');

const createError = require('http-errors');


const router = express.Router();

router.get("/", async(req, res) => {
    try {
        let comentariosRopa = await comentarioRopaModel.find();
        Response.success(res, 200, 'Listado de comentarios de ropa', comentariosRopa);
    } catch (error){
        Response.error(error);
    }
})

router.post('/', async(req, res) => {
    try {
        const {body} = req;

        if(!body || Object.keys(body).length == 0){
            Response.error(res, new createError.BadRequest());
        } else {
            const cr = comentarioRopaModel(req.body);
            await cr.save();
            Response.success(res, 201, 'Comentario agregado correctamente', cr);
        }
    } catch (error) {
        Response.error(error);
    }
});

router.get('/:idRopa', async(req, res) => {
    try {
        const {idRopa} = req.params;
        let comentarios = await comentarioRopaModel.find({"idRopa": idRopa});
        Response.success(res, 200, 'Listado de comentarios por ropa', comentarios);
    } catch (error) {
        Response.error(res);
    }
})

module.exports = router;
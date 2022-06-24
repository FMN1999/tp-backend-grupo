//Importo el paquete de express
const express = require('express');

//Importo el modelo que se creó, una vez obtenido el schema
const ropaModel = require('./ropaModel');

//Creo el router para así poder manejar mis propias rutas
const router = express.Router();

//Importo el archivo de response.js, el cual me servirá para dar respuestas 
//más personalizadas
const { Response } = require('../../response');

//Para un correcto manejo de errores, uso el paquete de http-errors
const createError = require('http-errors');


//getAll
router.get('/ropas', async(req, res) => {
    try {
        let ropas = await ropaModel.find();
        Response.success(res, 200, 'Listado de ropas', ropas);
    } catch (error) {
        Response.error(res);
    }
})

//create
router.post('/ropas', async(req, res) => {
    try {
        const { body } = req;

        //Valido que el objeto body no esté vacío
        if(!body || Object.keys(body).length == 0) {
            Response.error(res, new createError.BadRequest());
        }

        else{
            const ropa = ropaModel(req.body);
            await ropa.save();
            Response.success(res, 201, 'Ropa agregada correctamente', ropa);
        }
    } catch (error) {
        Response.error(res);
    }
})

//getById
router.get('/ropas/:id', async(req, res) => {
    try {
        const { id } = req.params;
        let ropa = await ropaModel.findById(id);

        //Valido que exista la ropa a buscar
        if(!ropa){
            Response.error(res, new createError.NotFound());
        }

        else{
            Response.success(res, 200, `Ropa: ${id}`, ropa);
        }

    } catch (error) {
        Response.error(res);
    }
})

//update
router.put('/ropas/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {marca, categoria, talle, detalle} = req.body;
        let ropa = await ropaModel.updateOne({_id:id}, { $set: {marca, categoria, talle, detalle}});
        Response.success(res, 200, "Ropa actualizada correctamente", ropa);

    } catch (error) {
        Response.error(error);
    }
})


//delete
router.delete("/:idRopa", async(req, res) => {
    try {
        const { id } = req.params;
        res.json(await ropaModel.deleteOne({"_id": id}));
    } catch (error) {
        res.json({message:error})
    }
})

//Importo las rutas para usar desde el index.js, almacenado en la carpeta raíz del proyecto
module.exports = router;
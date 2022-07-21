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
router.get ("/ropas/:id", (req, res) => {
    const { id } = req.params;
    ropaModel
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }));
});

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
router.delete("/ropas/:id", async(req, res) => {
    try {
        const { id } = req.params;
        let ropa = await ropaModel.deleteOne({"_id": id});
        Response.success(res, 200, `Ropa eliminada correctamente`, ropa);
    } catch (error) {
        Response.error(error);
    }
})










//getAllDetalle. Esto muestra el detalle, y luego clickeando la entidad en el Front, mostrará 
//la categoria y el precio
router.get('/ropasDetalle', async(req, res) => {
    try {
        let ropas = await ropaModel.find({}, {"detalle":1, "_id":0});
        Response.success(res, 200, 'Listado de ropas', ropas);
    } catch (error) {
        Response.error(res);
    }
})

//getAllCategoria. Esto muestra la categoría
router.get('/ropasCate', async(req, res) => {
    try {
        let ropas = await ropaModel.find({}, {"categoria":1, "_id":0});
        Response.success(res, 200, 'Listado de ropas', ropas);
    } catch (error) {
        Response.error(res);
    }
})



//Importo las rutas para usar desde el index.js, almacenado en la carpeta raíz del proyecto
module.exports = router;
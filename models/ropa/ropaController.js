
//Importo el paquete de express
const express = require('express');

//Importo el modelo que se creó, una vez obtenido el schema
const ropaModel = require('./ropaModel');

const tipoRopaModel = require('../tipoRopa/tipoRopaModel');

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
        let ropas = await ropaModel.find().populate('tipoRopa').populate('precioRopa').populate('temporada');
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
        const {marca, categoria, talle, detalle, tipoRopa, temporada, precioRopa} = req.body;
        let ropa = await ropaModel.updateOne({_id:id}, { $set: {marca, categoria, talle, detalle, tipoRopa, temporada, precioRopa}});
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










//Al hacer click en una ropa, que muestre la CATEGORIA, TEMPORADA, TIPO DE ROPA y el PRECIO.
//getAllDetalles. Esto muestra el detalle, categoría, precio de ropa, tipo de ropa y temporada.  
router.get('/ropasDetalles/:id', async(req, res) => {
    try {
        const { id } = req.params;
        let ropas = await ropaModel.findById(id, {"detalle":1, "categoria":1, "precioRopa":1, "tipoRopa":1, "_id":0}).populate('tipoRopa').populate('precioRopa').populate('temporada');
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



//getByTipoRopa
router.get('/ropasFiltro/:detalleTipoRopa', async(req, res) => {
    try {
        const {detalleTipoRopa} = req.params;
        let docTipoRopa = await tipoRopaModel.find({"detalle":detalleTipoRopa});
        let ropas = await ropaModel.find({"tipoRopa": docTipoRopa}).populate('tipoRopa').populate('precioRopa').populate('temporada');
        Response.success(res, 200, 'Listado de ropas con filtro', ropas);
    } catch (error) {
        Response.error(res);
    }
})

router.get('/ropasSearch/:texto_busqueda', async(req, res) => {
    try {
        const {texto_busqueda} = req.params;
        let ropas = await ropaModel.find({detalle: "/^" + texto_busqueda+ "^/"}).populate('tipoRopa').populate('precioRopa').populate('temporada');
        Response.success(res, 200, 'Busqueda por texto: ', ropas);
    } catch (error) {
        Response.error(res);
    }
})

//Importo las rutas para usar desde el index.js, almacenado en la carpeta raíz del proyecto
module.exports = router;

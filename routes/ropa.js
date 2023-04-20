const express = require('express');
const ropaModel = require('../models/ropa/ropaModel');
const { Response } = require('../response');
const {ropaServices} = require('../models/ropa/ropaServices');
const router = express.Router();

router.get('/', ropaServices.getAll)
router.post('/', ropaServices.create)
router.get('/:id', ropaServices.getById)
router.put('/:id', ropaServices.update)
router.delete("/:id", ropaServices.delete)
router.get('/ropasDetalles/:id', async(req, res) => {
    try {
        const { id } = req.params;
        let ropas = await ropaModel.findById(id, {"detalle":1, "categoria":1, "precioRopa":1, "tipoRopa":1, "_id":0}).populate('tipoRopa').populate('precioRopa').populate('temporada');
        Response.success(res, 200, 'Listado de ropas', ropas);
    } catch (error) {
        Response.error(res);
    }
})
router.get('/ropasCate', async(req, res) => {
    try {
        let ropas = await ropaModel.find({}, {"categoria":1, "_id":0});
        Response.success(res, 200, 'Listado de ropas', ropas);
    } catch (error) {
        Response.error(res);
    }
})
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
        let ropas = await ropaModel.find({"detalle": new RegExp('.*' + texto_busqueda + '.*')})
            .populate('tipoRopa')
            .populate('precioRopa').populate('temporada');
        Response.success(res, 200, 'Busqueda por texto: ', ropas);
    } catch (error) {
        Response.error(res);
    }
})

module.exports = router;

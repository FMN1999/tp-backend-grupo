//Importo el paquete de express
const express = require('express');

//Importo el modelo que se creó, una vez obtenido el schema
const ropaModel = require('./ropaModel');



const {ropaServices} = require('./ropaServices');

//Creo el router para así poder manejar mis propias rutas
const router = express.Router();



//getAll
router.get('/', ropaServices.getAll)

//create
router.post('/', ropaServices.create)

//getById
router.get('/:id', ropaServices.getById)

//update
router.put('/:id', ropaServices.update)

//delete
router.delete("/:id", ropaServices.delete)










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
        let ropas = await ropaModel.find({"detalle": new RegExp('.*' + texto_busqueda + '.*')})
            .populate('tipoRopa')
            .populate('precioRopa').populate('temporada');
        Response.success(res, 200, 'Busqueda por texto: ', ropas);
    } catch (error) {
        Response.error(res);
    }
})

//Importo las rutas para usar desde el index.js, almacenado en la carpeta raíz del proyecto
module.exports = router;

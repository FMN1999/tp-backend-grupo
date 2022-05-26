//Este archivo sirve para crear las funciones que controlaran cada una de las rutas 
//establecidas en '/models/temporada/index.js'

const debug = require('debug')('app:module-tipoRopas-controller');


//Importo el objeto desde services.js
const { TipoRopaServices } = require('./services');



module.exports.TipoRopaController = {

    //Esta será la ruta para obtener todas los tipos de ropa
    getTiposRopa: async(req, res) => {
        try {
            //Aca se almacenaran todas los tipos de ropa que vienen desde services.js.
            let tiposropa = await TipoRopaServices.getAll()
            
            //Como respuesta al cliente, le damos un formato json
            res.json(tiposropa);

        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    }, 

    getTipoRopa: async(req, res) => {
        //Desestructuro el objeto req(request) para obtener el id que viene en la URL. 
        //De req obtengo params, y de params obtengo el id.
        try {    
            const {params : { id } } = req;
            let tiporopa = await TipoRopaServices.getById(id);
            res.json(tiporopa);
        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    },


    createTipoRopa: async(req, res) => {
        try {
            //Desestructuro el body que viene desde la request(req)
            const { body } = req;
            const insertedId = await TipoRopaServices.create(body);

            //Envío la respuesta al cliente
            res.json(insertedId);
            
        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    }
}
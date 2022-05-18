//Este archivo sirve para crear las funciones que controlaran cada una de las rutas 
//establecidas en '/models/temporada/index.js'

const debug = require('debug')('app:module-temporadas-controller');


//Importo el objeto desde services.js
const { TemporadaServices } = require('./services');



module.exports.TemporadaController = {

    //Esta será la ruta para obtener todas las temporadas
    getTemporadas: async(req, res) => {
        try {
            //Aca se almacenaran todas las temporadas que vienen desde services.js.
            let temporadas = await TemporadaServices.getAll()
            
            //Como respuesta al cliente, le damos un formato json
            res.json(temporadas);

        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    }, 

    getTemporada: async(req, res) => {
        //Desestructuro el objeto req(request) para obtener el id que viene en la URL. 
        //De req obtengo params, y de params obtengo el id.
        try {    
            const {params : { id } } = req;
            let temporada = await TemporadaServices.getById(id);
            res.json(temporada);
        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    },


    createTemporada: async(req, res) => {
        try {
            //Desestructuro el body que viene desde la request(req)
            const { body } = req;
            const insertedId = await TemporadaServices.create(body);

            //Envío la respuesta al cliente
            res.json(insertedId);
            
        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    }
}
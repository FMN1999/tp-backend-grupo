//Este archivo sirve para crear las funciones que controlaran cada una de las rutas 
//establecidas en '/models/temporada/index.js'

const debug = require('debug')('app:module-temporadas-controller');


//Importo el objeto desde services.js
const { TemporadaServices } = require('./services');


//Importo el archivo de response.js
const { Response } = require('../../response');
const createError = require('http-errors');



module.exports.TemporadaController = {

    //Esta será la ruta para obtener todas las temporadas
    getTemporadas: async(req, res) => {
        try {
            //Aca se almacenaran todas las temporadas que vienen desde services.js.
            let temporadas = await TemporadaServices.getAll()
            
            
            //Uso lo del archivo de response.js
            Response.success(res, 200, 'Listado de temporadas', temporadas);
            
            


            //ESTO ERA LA VERSIÓN VIEJA
            //Como respuesta al cliente, le damos un formato json
            //res.json(temporadas);

        } catch (error) {
            debug(error);

            //Uso lo del archivo de response.js
            Response.error(res);
            
            //ESTO ERA LA VERSIÓN VIEJA
            //res.status(500).json({message: "Internal server error"});
        }
    }, 

    getTemporada: async(req, res) => {
        //Desestructuro el objeto req(request) para obtener el id que viene en la URL. 
        //De req obtengo params, y de params obtengo el id.
        try {    
            const {params : { id } } = req;
            let temporada = await TemporadaServices.getById(id);

            //Voy a realizar una validación para el caso en que no exista una temporada:

            if(!temporada){
                //Si la temporada no existe, entonces creo un error
                Response.error(res, new createError.NotFound());
            }

            //En caso de que la temporada si exista
            else{
                Response.success(res, 200, `Temporada: ${id}`, temporada);
            }


            //ESTO ERA LA VERSIÓN VIEJA
            //res.json(temporada);

        } catch (error) {
            debug(error);
            
            Response.error(res);

            //ESTO ERA LA VERSIÓN VIEJA
            //res.status(500).json({message: "Internal server error"});
        }
    },

    createTemporada: async(req, res) => {
        try {
            //Desestructuro el body que viene desde la request(req)
            const { body } = req;
            //const insertedId = await TemporadaServices.create(body);

            //Voy a validar si lo que me ingresaron está vacío. Para ello, uso 'body', y usamos 
            //Object.keys() nos va a devolver todas las claves del objeto body. Esto nos retorna un 
            //array

            //"Si el body es null o las claves del body están vacías, entonces, que se cree un error 
            //de tipo BadRequest"
            if(!body || Object.keys(body).length == 0) {
                Response.error(res, new createError.BadRequest());
            }

            //Si hay datos en el body
            else{
                const insertedId = await TemporadaServices.create(body);

                //Envío la respuesta de éxito
                Response.success(res, 201, 'Temporada agregada exitosamente', insertedId);
            }

            //ESTO ERA LA VERSIÓN VIEJA
            //Envío la respuesta al cliente
            //res.json(insertedId);
            
        } catch (error) {
            debug(error);
            
            Response.error(res);
            //ESTO ERA LA VERSIÓN VIEJA
            //res.status(500).json({message: "Internal server error"});
        }
    },

    dropTemporada: async(req, res) => {
        try {
            const {params : { id } } = req;
            //const confirmacion = await TemporadaServices.drop(id);
            let temporada = await TemporadaServices.drop(id);
            
            Response.success(res, 200, `Temporada ${id} eliminada correctamente`, temporada);
            //res.json(confirmacion);
        } catch (error) {
            debug(error);
            
            Response.error(res);
            //ESTO ERA LA VERSIÓN VIEJA
            //res.status(500).json({message: "Internal server error"});
        }
    }
}
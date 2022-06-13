//Este archivo sirve para crear las funciones que controlaran cada una de las rutas 
//establecidas en '/models/temporada/index.js'

const debug = require('debug')('app:module-tipoRopas-controller');


//Importo el objeto desde services.js
const { TipoRopaServices } = require('./services');

//Importo el archivo de response.js
const { Response } = require('../../response');
const createError = require('http-errors');



module.exports.TipoRopaController = {

    //Esta será la ruta para obtener todas los tipos de ropa
    getTiposRopa: async(req, res) => {
        try {
            //Aca se almacenaran todas los tipos de ropa que vienen desde services.js.
            let tiposropa = await TipoRopaServices.getAll()
            
            Response.success(res, 200, 'Listado de temporadas', tiposropa);

        } catch (error) {
            debug(error);
            //Uso lo del archivo de response.js
            Response.error(res);
        }
    }, 

    getTipoRopa: async(req, res) => {
        //Desestructuro el objeto req(request) para obtener el id que viene en la URL. 
        //De req obtengo params, y de params obtengo el id.
        try {    
            const {params : { id } } = req;
            let tiporopa = await TipoRopaServices.getTipoRopaById(id);
            
            //Voy a realizar una validación para el caso en que no exista una temporada:

            if(!tiporopa){
                //Si la temporada no existe, entonces creo un error
                Response.error(res, new createError.NotFound());
            }

            //En caso de que la temporada si exista
            else{
                Response.success(res, 200, `TipoRopa: ${id}`, tiporopa);
            }
        } catch (error) {
            debug(error);
            
            Response.error(res);
        }
    },


    createTipoRopa: async(req, res) => {
        try {
            //Desestructuro el body que viene desde la request(req)
            const { body } = req;
            //const insertedId = await TipoRopaServices.create(body);

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
                const insertedId = await TipoRopaServices.createTipoRopa(body);

                //Envío la respuesta de éxito
                Response.success(res, 201, 'Tipo de ropa agregada exitosamente', insertedId);
            }
            
        } catch (error) {
            debug(error);
            
            Response.error(res);
        }
    },

    deleteTipoRopa: async(req, res) => {
        //Desestructuro el objeto req(request) para obtener el id que viene en la URL. 
        //De req obtengo params, y de params obtengo el id.
        try {    
            const {params : { id } } = req;
            let tiporopa = await TemporadaServices.deleteTemporada(id);
            Response.success(res, 200, `Tipo de ropa ${id} eliminada correctamente`, tiporopa);
        } catch (error) {
            debug(error);
            
            Response.error(res);
        }
    },

    updateTipoRopa: async(req, res) => {
        try {
            const {params : { id } } = req;
            const {body : {detalle} } = req;

            let tiporopa = await TipoRopaServices.updateTipoRopa(id, detalle);

            Response.success(res, 200, `Tipo de ropa ${id} modificada correctamente`, tiporopa);
        } catch(error) {
            debug(error);
            Response.error(res);
        }
    }
}
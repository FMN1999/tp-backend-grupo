const debug = require('debug')('app:module-clientes-controller');

const { ClienteServices } = require('./services');

const { Response } = require('../../response');
const createError = require('http-errors');

module.exports.ClienteController = {

    getClientes: async(req, res) => {
        try {
            let clientes = await ClienteServices.getAll();

            Response.success(res, 200, 'Listado de clientes', clientes);

        } catch(error){
            debug (error);
            Response.error(res);
        }
    },

    getCliente: async(req, res) => {
        try{    
            const {params : { id } } = req; 
            let cliente = await ClienteServices.getById(id);

            if(!cliente){
                Response.error(res, new createError.NotFound());
            }
            else {
                Response.success(res, 200, `Cliente: ${id}`, cliente);
            }

        } catch(error){
            debug(error);
            Response.error(res);
        }
    },

    createCliente: async(req, res) => {
        try{
            const { body } = req;

            if (!body || Object.keys(body).length == 0) {
                Response.error(res, new createError.BadRequest());
            }
            else{
                const insertedId = await ClienteServices.create(body);

                Response.success(res, 201, 'Cliente agregado exitosamente', insertedId);
            }
    
        } catch (error) {
            debug (error);
            Response.error(res);
        }
    },

    updateCliente: async(req, res) => {
        try {
            const {params : { id } } = req;
            const {body : {nombre, apellido, email} } = req;

            let cliente = await ClienteServices.update(id, nombre, apellido, email);

            Response.success(res, 200, `Cliente ${id} modificado correctamente`, cliente);
        } catch(error) {
            debug(error);
            Response.error(res);
        }
    },

    dropCliente: async(req, res) => {
        try{
            const {params : { id } } = req;

            let cliente = await ClienteServices.drop(id);

            Response.success(res, 200, `Cliente ${id} eliminado correctamente`, cliente);
        } catch(error) {
            debug (error);
            Response.error(res);
        }
    }

}
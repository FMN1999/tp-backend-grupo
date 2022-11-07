const clienteModel = require("./clienteModel");

const { Response } = require('../../response');

module.exports.clienteServices = {

    getAll: async(req, res) => {
        try {
            let clientes = await clienteModel.find();
            Response.success(res, 200, 'Listado de clientes', clientes);
        } catch (error) {
            Response.error(error);
        }
    }, 

    create: async(req, res) => {
        try {
            const { body } = req;
    
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            }
            else{
                const cliente = clienteModel(req.body);
                await cliente.save();
                Response.success(res, 201, 'Cliente agregado correctamente', cliente);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    getById: async(req, res) => {
        try {
            const { id } = req.params;
            let cliente = await clienteModel.findById(id);
    
            //Valido que exista la ropa a buscar
            if(!cliente){
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Cliente: ${id}`, cliente);
            }
    
        } catch (error) {
            Response.error(res);
        }
    },

    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {apellido, email, nombre} = req.body;
            let cliente = await clienteModel.updateOne({_id:id}, { $set: {apellido, email, nombre}});
            Response.success(res, 200, "Cliente actualizado correctamente", cliente);
    
        } catch (error) {
            Response.error(error);
        }
    }, 

    delete: async(req, res) => {
        try {
            const { id } = req.params;
            let cliente = await clienteModel.deleteOne({"_id": id});
            Response.success(res, 200, `Cliente eliminado correctamente`, cliente);
        } catch (error) {
            Response.error(error);
        }
    }
}
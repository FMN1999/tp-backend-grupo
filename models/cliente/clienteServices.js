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
                Response.success(res, 201, `Cliente ${cliente.nombre} ${cliente.apellido} agregado correctamente`, cliente);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    getById: async(req, res) => {
        try {
            const { id } = req.params;
            let cliente = await clienteModel.findById(id);
            if(!cliente){
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Cliente: ${cliente.nombre} ${cliente.apellido}`, cliente);
            }
        } catch (error) {
            Response.error(res);
        }
    },

    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {apellido, email, nombre} = req.body;
            await clienteModel.updateOne({_id:id}, { $set: {apellido, email, nombre}});
            let cliente = await clienteModel.findById(id);
            Response.success(res, 201, `Cliente ${cliente.nombre} ${cliente.apellido} actualizado correctamente`, cliente);
        } catch (error) {
            Response.error(error);
        }
    }, 

    delete: async(req, res) => {
        try {
            const { id } = req.params;
            let cliente = await clienteModel.findById(id);
            await clienteModel.deleteOne({"_id": id});
            Response.success(res, 200, `Cliente ${cliente.nombre} ${cliente.apellido} eliminado correctamente`, cliente);
        } catch (error) {
            Response.error(error);
        }
    }
}
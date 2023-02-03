const clienteModel = require("./clienteModel");

const { Response } = require('../../response');


//Testeado por Guille 03/02/2023. Se probó que anduvieran los métodos, y además se le cambió 
//el atributo de exhibición en el mensaje
module.exports.clienteServices = {

    //FUNCIONA -- Guille 03/02/2023
    getAll: async(req, res) => {
        try {
            let clientes = await clienteModel.find();
            Response.success(res, 200, 'Listado de clientes', clientes);
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
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

    //FUNCIONA -- Guille 03/02/2023
    getById: async(req, res) => {
        try {
            const { id } = req.params;
            let cliente = await clienteModel.findById(id);
    
            //Valido que exista la ropa a buscar
            if(!cliente){
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Cliente: ${cliente.nombre} ${cliente.apellido}`, cliente);
            }
    
        } catch (error) {
            Response.error(res);
        }
    },

    //FUNCIONA -- Guille 03/02/2023
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

    //FUNCIONA -- Guille 03/02/2023
    delete: async(req, res) => {
        try {
            const { id } = req.params;
            //let cliente = await clienteModel.deleteOne({"_id": id});
            let cliente = await clienteModel.findById(id);
            await clienteModel.deleteOne({"_id": id});
            Response.success(res, 200, `Cliente ${cliente.nombre} ${cliente.apellido} eliminado correctamente`, cliente);
        } catch (error) {
            Response.error(error);
        }
    }
}
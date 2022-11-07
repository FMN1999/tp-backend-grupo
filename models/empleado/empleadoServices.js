const empleadoModel = require('./empleadoModel');

const { Response } = require('../../response');

const createError = require('http-errors');


module.exports.empleadoServices = {

    getAll: async(req, res) => {
        try {
            let empleados = await empleadoModel.find();
            Response.success(res, 200, 'Listado de empleados', empleados);
        } catch (error) {
            Response.error(error);
        }
    }, 

    create: async(req, res) => {
        try {
            const {body} = req;
    
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const emp = empleadoModel(req.body);
                await emp.save();
                Response.success(res, 201, 'Empleado agregado correctamente', emp);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    getById: async(req, res) => {
        try {
            const { id } = req.params;
            let empleado = await empleadoModel.findById(id);
    
            if(!empleado){
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Empleado: ${id}`, empleado);
            }
    
        } catch (error) {
            Response.error(res);
        }
    }, 

    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {apellido, legajo, nombre} = req.body;
            let empleado = await empleadoModel.updateOne({_id:id}, { $set: {apellido, legajo, nombre}});
            Response.success(res, 200, "Empleado actualizado correctamente", empleado);
    
        } catch (error) {
            Response.error(error);
        }
    }, 

    delete: async(req, res) => {
        try {
            const { id } = req.params;
            let empleado = await empleadoModel.deleteOne({"_id": id});
            Response.success(res, 200, `Empleado eliminado correctamente`, empleado);
        } catch (error) {
            Response.error(error);
        }
    }
}
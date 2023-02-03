const empleadoModel = require('./empleadoModel');

const { Response } = require('../../response');

const createError = require('http-errors');


module.exports.empleadoServices = {

    //FUNCIONA -- Guille 03/02/2023
    getAll: async(req, res) => {
        try {
            let empleados = await empleadoModel.find();
            Response.success(res, 200, 'Listado de empleados', empleados);
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    create: async(req, res) => {
        try {
            const {body} = req;
    
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const emp = empleadoModel(req.body);
                await emp.save();
                Response.success(res, 201, `Empleado ${emp.nombre} ${emp.apellido} agregado correctamente`, emp);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    getById: async(req, res) => {
        try {
            const { id } = req.params;
            let empleado = await empleadoModel.findById(id);
    
            if(!empleado){
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Empleado: ${empleado.nombre} ${empleado.apellido}`, empleado);
            }
    
        } catch (error) {
            Response.error(res);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {apellido, legajo, nombre} = req.body;
            await empleadoModel.updateOne({_id:id}, { $set: {apellido, legajo, nombre}});
            let empleado = await empleadoModel.findById(id);
            Response.success(res, 201, `Empleado ${empleado.nombre} ${empleado.apellido} actualizado correctamente`, empleado);
    
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    delete: async(req, res) => {
        try {
            const { id } = req.params;
            let empleado = await empleadoModel.findById(id);
            await empleadoModel.deleteOne({"_id": id});
            Response.success(res, 200, `Empleado ${empleado.nombre} ${empleado.apellido} eliminado correctamente`, empleado);
        } catch (error) {
            Response.error(error);
        }
    }
}
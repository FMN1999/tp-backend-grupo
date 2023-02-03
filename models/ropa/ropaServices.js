const ropaModel = require('./ropaModel');

const { Response } = require('../../response');

const createError = require('http-errors');


module.exports.ropaServices = {


    //FUNCIONA -- Guille 03/02/2023
    getAll: async(req, res) => {
        try {
            let ropas = await ropaModel.find().populate('tipoRopa').populate('precioRopa').populate('temporada');
            Response.success(res, 200, 'Listado de ropas', ropas);
        } catch (error) {
            Response.error(res);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    create: async(req, res) => {
        try {
            const { body } = req;
    
            //Valido que el objeto body no esté vacío
            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            }
            else{
                const ropa = ropaModel(req.body);
                await ropa.save();
                Response.success(res, 201, `Ropa ${ropa.marca} ${ropa.detalle} agregada correctamente`, ropa);
            }
        } catch (error) {
            Response.error(res);
        }
    },

    //FUNCIONA -- Guille 03/02/2023
    getById: async(req, res) => {
        try {
            const { id } = req.params;
            let ropa = await ropaModel.findById(id).populate('tipoRopa').populate('precioRopa').populate('temporada');
    
            if(!ropa){
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Ropa: ${ropa.marca} ${ropa.detalle}`, ropa);
            }
    
        } catch (error) {
            Response.error(res);
        }
    },

    //FUNCIONA -- Guille 03/02/2023
    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {marca, categoria, talle, detalle, tipoRopa, temporada, precioRopa} = req.body;
            await ropaModel.updateOne({_id:id}, { $set: {marca, categoria, talle, detalle, tipoRopa, temporada, precioRopa}});
            let ropa = await ropaModel.findById(id).populate('tipoRopa').populate('precioRopa').populate('temporada');
            Response.success(res, 201, `Ropa ${ropa.marca} ${ropa.detalle} actualizada correctamente`, ropa);
    
        } catch (error) {
            Response.error(error);
        }
    }, 
    
    //FUNCIONA -- Guille 03/02/2023
    delete: async(req, res) => {
        try {
            const { id } = req.params;
            let ropa = await ropaModel.findById(id).populate('tipoRopa').populate('precioRopa').populate('temporada');
            await ropaModel.deleteOne({"_id": id});
            Response.success(res, 200, `Ropa ${ropa.marca} ${ropa.detalle} eliminada correctamente`, ropa);
        } catch (error) {
            Response.error(error);
        }
    }
}

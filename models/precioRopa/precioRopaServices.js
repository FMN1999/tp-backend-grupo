const precioRopaModel = require("./precioRopaModel");

const { Response } = require('../../response');

module.exports.precioRopaServices = {

    getAll: async(req, res) => {
        try {
            let preciosRopa = await precioRopaModel.find();
            Response.success(res, 200, 'Listado de precios de ropas', preciosRopa);
        } catch (error) {
            Response.error(res);
        }
    }, 

    create: async(req, res) => {
        try {
            const{body} = req;
    
            //Valido que el objeto no esté vacío
            if(!body || Object.keys(body).length == 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const pr = precioRopaModel(req.body);
                await pr.save();
                Response.success(res, 201, 'Precio de ropa agregado correctamente', pr);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    getById: async(req, res) => {
        try {
            const{id} = req.params;
            let pr = await precioRopaModel.findById(id);
            
            //Valido que exista la temporada a buscar
            if(!pr){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Precio de ropa: ${id}`, pr);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    update: async(req, res) => {   
        try {
            const {id} = req.params;
            const {importe, fechaDesde} = req.body;
            let pr = await precioRopaModel.updateOne({_id: id}, { $set: {importe, fechaDesde}});
            Response.success(res, 200, "Precio de ropa actualizado correctamente", pr);
        } catch (error) {
            Response.error(error);
        }
    }, 

    getByImporte: async(req, res) => {
        try {
            const {amount} = req.params;
            let precioRopa = await precioRopaModel.find({importe: Number(amount)});
    
            //Valido que exista el precio de ropa a buscar
            if(!precioRopa){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Precio de ropa: ${amount}`, precioRopa);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    delete: async(req, res) => {   
        try {
            const { id } = req.params;
            await precioRopaModel.deleteOne({_id: id});
            Response.success(res, 200, `Precio de ropa eliminado correctamente`);
        } catch (error) {
            Response.error(error);
        }
    }
}
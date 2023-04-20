const precioRopaModel = require("./precioRopaModel");

const { Response } = require('../../response');

module.exports.precioRopaServices = {

    //FUNCIONA -- Guille 03/02/2023
    getAll: async(req, res) => {
        try {
            let preciosRopa = await precioRopaModel.find();
            Response.success(res, 200, 'Listado de precios de ropas', preciosRopa);
        } catch (error) {
            Response.error(res);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    create: async(req, res) => {
        try {
            const{body} = req;
    
            //Valido que el objeto no esté vacío
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const pr = precioRopaModel(req.body);
                await pr.save();
                Response.success(res, 201, `Precio de ropa ${pr.importe} agregado correctamente`, pr);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    getById: async(req, res) => {
        try {
            const{id} = req.params;
            let pr = await precioRopaModel.findById(id);
            
            if(!pr){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Precio de ropa: ${pr.importe}`, pr);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 


    //FUNCIONA -- Guille 03/02/2023
    update: async(req, res) => {   
        try {
            const {id} = req.params;
            const {importe, fechaDesde} = req.body;
            await precioRopaModel.updateOne({_id: id}, { $set: {importe, fechaDesde}});
            let pr = await precioRopaModel.findById(id);

            Response.success(res, 201, `Precio de ropa ${pr.importe} actualizado correctamente`, pr);
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 06/02/2023
    getByImporte: async(req, res) => {
        try {
            const {amount} = req.params;
            let precioRopa = await precioRopaModel.find({importe: Number(amount)});
    
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


    //FUNCIONA -- Guille 03/02/2023
    delete: async(req, res) => {   
        try {
            const { id } = req.params;
            let pr = await precioRopaModel.findById(id);
            await precioRopaModel.deleteOne({_id: id});
            Response.success(res, 200, `Precio de ropa ${pr.importe} eliminado correctamente`, pr);
        } catch (error) {
            Response.error(error);
        }
    }
}
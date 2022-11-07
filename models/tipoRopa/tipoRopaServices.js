const tipoRopaModel = require('./tipoRopaModel');

const { Response } = require('../../response');

const createError = require('http-errors');

module.exports.tipoRopaServices = {

    getAll: async(req, res) => {
        try {
            let tiposRopa = await tipoRopaModel.find();
            Response.success(res, 200, 'Listado de tipos de ropa', tiposRopa);
        } catch (error) {
            Response.error(error);
        }
    }, 

    create: async(req, res) => {
        try {
            const {body} = req;
    
            //Valido que el objeto body no esté vacío
            if(!body || Object.keys(body).length == 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const tr = tipoRopaModel(req.body);
                await tr.save();
                Response.success(res, 201, 'Tipo de ropa agregada correctamente', tr);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    getById: async(req, res) => {
        try {
            const {id} = req.params;
            let tr = await tipoRopaModel.findById(id);
    
            //Valido que exista el tipo de ropa a buscar
            if(!tr){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Tipo de Ropa: ${id}`, tr);
            }
    
        } catch (error) {
            Response.error(res);
        }
    }, 

    update: async(req, res) => {
        try {
            const { id } = req.params;
            const { detalle } = req.body;
            let tr = await tipoRopaModel. updateOne({_id: id}, { $set: {detalle}});
            Response.success(res, 200, "Tipo de Ropa actualizada correctamente", tr);
        } catch (error) {
            Response.error(error);
        }
    }, 

    getByDetalles: async(req, res) => {
        try {
            const {detail} = req.params;
            let tipoRopa = await tipoRopaModel.find({detalle: detail});
    
            //Valido que exista el tipo de ropa a buscar
            if(!tipoRopa){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Tipo de ropa: ${detail}`, tipoRopa);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    delete: async(req, res) => {
        try {
            const { id } = req.params;
            await tipoRopaModel.deleteOne({"_id": id});
            Response.success(res, 200, `Tipo de Ropa eliminada correctamente`);
        } catch (error) {
            Response.error(error);
        }
    }
}
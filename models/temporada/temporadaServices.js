const temporadaModel = require('./temporadaModel');

const { Response } = require('../../response');

const createError = require('http-errors');

module.exports.temporadaServices = {

    getAll: async(req, res) => {
        try {
            let temporadas = await temporadaModel.find();
            Response.success(res, 200, 'Listado de temporadas', temporadas);
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
                const tempo = temporadaModel(req.body);
                await tempo.save();
                Response.success(res, 201, 'Temporada agregada correctamente', tempo);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    getById: async(req, res) => {
        try {
            const {id} = req.params;
            let tempo = await temporadaModel.findById(id);
    
            //Valido que exista la temporada a buscar
            if(!tempo){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Temporada: ${id}`, tempo);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    getByDetalle: async(req, res) => {
        try {
            const {detail} = req.params;
            let tempo = await temporadaModel.find({detalle: detail});
    
            //Valido que exista la temporada a buscar
            if(!tempo){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Temporada: ${detail}`, tempo);
            }
        } catch (error) {
            Response.error(res);
        }
    }, 

    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {detalle, fechaDesde, fechaHasta} = req.body;
            let tempo = await temporadaModel.updateOne({_id: id}, { $set: {detalle, fechaDesde, fechaHasta}});
            Response.success(res, 200, "Temporada actualizada correctamente", tempo);
        } catch (error) {
            Response.error(error);
        }
    }, 

    delete: async(req, res) => {
        try {
            const { id } = req.params;
            await temporadaModel.deleteOne({_id: id});
            Response.success(res, 200, `Temporada eliminada correctamente`);
        } catch (error) {
            Response.error(error);
        }
    }
}
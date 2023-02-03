const temporadaModel = require('./temporadaModel');

const { Response } = require('../../response');

const createError = require('http-errors');

module.exports.temporadaServices = {

    //FUNCIONA -- Guille 03/02/2023
    getAll: async(req, res) => {
        try {
            let temporadas = await temporadaModel.find();
            Response.success(res, 200, 'Listado de temporadas', temporadas);
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    create: async(req, res) => {
        try {
            const {body} = req;
    
            if(!body || Object.keys(body).length == 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const tempo = temporadaModel(req.body);
                await tempo.save();
                Response.success(res, 201, `Temporada ${tempo.detalle} agregada correctamente`, tempo);
            }
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    getById: async(req, res) => {
        try {
            const {id} = req.params;
            let tempo = await temporadaModel.findById(id);
    
            if(!tempo){
                Response.error(res, new createError.NotFound());
            }
            else{
                Response.success(res, 200, `Temporada: ${tempo.detalle}`, tempo);
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

    //FUNCIONA -- Guille 03/02/2023
    update: async(req, res) => {
        try {
            const {id} = req.params;
            const {detalle, fechaDesde, fechaHasta} = req.body;
            await temporadaModel.updateOne({_id: id}, { $set: {detalle, fechaDesde, fechaHasta}});
            let tempo = await temporadaModel.findById(id);
            Response.success(res, 201, `Temporada ${tempo.detalle} actualizada correctamente`, tempo);
        } catch (error) {
            Response.error(error);
        }
    }, 

    //FUNCIONA -- Guille 03/02/2023
    delete: async(req, res) => {
        try {
            const { id } = req.params;
            let tempo = await temporadaModel.findById(id);
            await temporadaModel.deleteOne({_id: id});
            Response.success(res, 200, `Temporada ${tempo.detalle} eliminada correctamente`, tempo);
        } catch (error) {
            Response.error(error);
        }
    }
}
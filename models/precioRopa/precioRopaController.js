const express = require("express");
const precioRopaSchema = require("./precioRopaModel");

const router = express.Router();
const { Response } = require('../../response');


//getAll
router.get ("/preciosRopa", async(req, res) => {
    try {
        let preciosRopa = await precioRopaSchema.find();
        Response.success(res, 200, 'Listado de precios de ropas', preciosRopa);
    } catch (error) {
        Response.error(res);
    }
});


//create
router.post ("/preciosRopa", async(req, res) => {
    try {
        const{body} = req;

        //Valido que el objeto no esté vacío
        if(!body || Object.keys(body).length == 0){
            Response.error(res, new createError.BadRequest());
        }
        else{
            const pr = precioRopaSchema(req.body);
            await pr.save();
            Response.success(res, 201, 'Precio de ropa agregado correctamente', pr);
        }
    } catch (error) {
        Response.error(error);
    }
});


//getById
router.get ("/preciosRopa/:id", async(req, res) => {
    try {
        const{id} = req.params;
        let pr = await precioRopaSchema.findById(id);
        
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
});


//getByImporte
router.get('/precioRopa/:amount', async(req, res) => {
    try {
        const {amount} = req.params;
        let precioRopa = await precioRopaSchema.find({importe: Number(amount)});

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
})

//update
router.put ("/preciosRopa/:id", async(req, res) => {   
    try {
        const {id} = req.params;
        const {importe, fechaDesde} = req.body;
        let pr = await precioRopaSchema.updateOne({_id: id}, { $set: {importe, fechaDesde}});
        Response.success(res, 200, "Precio de ropa actualizado correctamente", pr);
    } catch (error) {
        Response.error(error);
    }
});



//delete
router.delete ("/preciosRopa/:id", async(req, res) => {   
    try {
        const { id } = req.params;
        await precioRopaSchema.deleteOne({_id: id});
        Response.success(res, 200, `Precio de ropa eliminado correctamente`);
    } catch (error) {
        Response.error(error);
    }
});

module.exports = router;

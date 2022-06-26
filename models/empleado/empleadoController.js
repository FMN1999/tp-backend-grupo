const express = require('express');
const temporada = require('./empleadoModel');


const { Response } = require('../../response');

const createError = require('http-errors');


const router = express.Router();


router.get("/empleados", async(req, res) => {
    try {
        let empleados = await empleadoModel.find();
        Response.success(res, 200, 'Listado de empleados', empleados);
    } catch (error) {
        Response.error(error);
    }

    empleadoModel
        .find()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json({message:error}) );
})

router.post('/empleados', async(req, res) => {
    try {
        const {body} = req;

        if(!body || Object.keys(body).length == 0){
            Response.error(res, new createError.BadRequest());
        }
        else{
            const tempo = empleadoModel(req.body);
            await tempo.save();
            Response.success(res, 201, 'Empleado agregado correctamente', emp);
        }
    } catch (error) {
        Response.error(error);
    }
});


router.get('/empleados/:id', async(req, res) => {
    try {
        const {id} = req.params;
        let emp = await empleadoModel.findById(id);

        if(!emp){
            Response.error(res, new createError.NotFound());
        }
        else{
            Response.success(res, 200, `Empleado: ${id}`, emp);
        }

    } catch (error) {
        Response.error(res);
    }
})


router.put("empleados/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {legajo, nombre, apellido} = req.body;
        let emp = await empleadoModel.updateOne({_id: id}, { $set: {legajo, nombre, apellido}});
        Response.success(res, 200, "Empleado actualizado correctamente", emp);
    } catch (error) {
        Response.error(error);
    }
})


router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        await empleadoModel.deleteOne({"_id": id});
        Response.success(res, 200, `Empleado eliminado correctamente`);
    } catch (error) {
        Response.error(error);
    }
})

module.exports = router;
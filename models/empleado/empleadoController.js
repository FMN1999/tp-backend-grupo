const express = require('express');
const empleadoModel = require('./empleadoModel');
const router = express.Router();

const { Response } = require('../../response');

const createError = require('http-errors');


router.get("/empleados", async(req, res) => {
    try {
        let empleados = await empleadoModel.find();
        Response.success(res, 200, 'Listado de empleados', empleados);
    } catch (error) {
        Response.error(error);
    }
})

router.post('/empleados', async(req, res) => {
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
});


router.get ("/empleados/:id", (req, res) => {
    const { id } = req.params;
    empleadoModel
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }));
});


router.put ("/empleados/:id", (req, res) => {
    const { id } = req.params;
    const { apellido, legajo, nombre } = req.body;
    empleadoModel
        .updateOne({ _id: id}, { $set: {apellido, legajo, nombre} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }));
});


router.delete ("/empleados/:id", (req, res) => {
    const { id } = req.params;
    empleadoModel
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }));
});

module.exports = router;
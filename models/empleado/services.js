const { ObjectId } = require('mongodb');

const { Database } = require('../db');

const EMPLEADO = 'empleado';




/*--------------------------------------------Funciones------------------------------------------------*/

const getAll = async () => {

    const coleccion = await Database(EMPLEADO);
    return await coleccion.find({}).toArray();
}

const getById = async (id) => {
    const coleccion = await Database(EMPLEADO);
    return coleccion.findOne({_id: ObjectId(id)});
}

const create = async (empleado) => {
    const coleccion = await Database(EMPLEADO);
    let resultado = coleccion.insertOne(empleado);
    return resultado.insertedId;
}


module.exports.EmpleadoServices = {
    getAll,
    getById,
    create
}
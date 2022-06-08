const { ObjectId } = require('mongoDb');

const { Database } = require('../db');

const CLIENTE = 'cliente';

const getAll = async () => {

    const coleccion = await Database(CLIENTE);

    return await coleccion.find({}).toArray();
}

const getById = async (id) => {
    const coleccion = await Database(CLIENTE);

    return coleccion.findOne({_id: ObjectId(id)});
}

const create = async (cliente) => {
    const coleccion = await Database(CLIENTE);

    let resultado = await coleccion.insertOne(cliente);

    return resultado.inserteId;
}

const update = async (id, nombre, apellido, email) => {
    const coleccion = await Database(CLIENTE);

    let resultado = await coleccion.updateOne({_id: ObjectId(id)}, { $set: {nombre, apellido, email}})
}

const drop = async (id) => {
    const coleccion = await Database(CLIENTE);

    return coleccion.deleteOne({_id: ObjectId(id)})
}

module.exports.ClienteServices = {
    getAll,
    getById,
    create,
    update,
    drop
}
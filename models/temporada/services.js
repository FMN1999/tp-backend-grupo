//En este archivo se gestionan todos los datos, y la comunicación con la base de datos


//Desestructuro el objeto 'ObjectId'. Esto nos va a servir para convertir un id que viene 
//como string desde una request, hacia entero.
const { ObjectId } = require('mongodb');



//Importo el objeto Database ubicado en /models/db.js. 
const { Database } = require('../db');


//Defino una constante, la cual contiene el nombre de la colección que se necesita.
const TEMPORADA = 'temporada';




/*--------------------------------------------Funciones------------------------------------------------*/

//getAll me trae todos los documentos de la colección de temporada
const getAll = async () => {

    //Paso como argumento el nombre de la colección a la cual quiero acceder.
    const coleccion = await Database(TEMPORADA);

    //Aca vamos a usar el método find({}, {}) de mongoDb. Observar que no se indica ninguna 
    //condición de búsqueda a find({}), dado que quiero que me traiga todos los documentos.
    return await coleccion.find({}).toArray();
}

//Con getTemporadaById obtengo una temporada mediante su id
const getTemporadaById = async (id) => {
    const coleccion = await Database(TEMPORADA);

    //Dado que el id viene como string, debemos de convertirlo a Object para consultar a la 
    //base de datos de MongoDB. Aca uso el método findOne({}) de MongoDB, donde la condición 
    //es que coincida el id que recibo como parámetro (más arriba), con el de la colección donde busco.
    return coleccion.findOne({_id: ObjectId(id)});
}



//createTemporada  me sirve para crear un documento temporada 
const createTemporada = async (temporada) => {
    const coleccion = await Database(TEMPORADA);

    //El método insertOne() es de mongoDb y es el cual hace la inserción a la base de datos. Nos 
    //devuelve un resultado que sirve para mostrar lo que se insertó.
    let resultado = await coleccion.insertOne(temporada);

    //Con resultado(variable que definí) viene una clave llamada insertedId
    return resultado.insertedId;
}


const deleteTemporada = async (id) => {
    const coleccion = await Database(TEMPORADA);
    return coleccion.deleteOne({_id: ObjectId(id)});
}


const updateTemporada = async (idTemporada, fechaDesde, fechaHasta, detalle) => {
    const coleccion = await Database(TEMPORADA);
    return await coleccion.updateOne({_id: ObjectId(idTemporada)}, { $set: {fechaDesde, fechaHasta, detalle}})
}


//Exporto las funciones creadas anteriormente, para poder usarlas en otros archivos.
module.exports.TemporadaServices = {
    getAll,
    getTemporadaById, 
    createTemporada, 
    deleteTemporada, 
    updateTemporada
}
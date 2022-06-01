//Traigo lo que contiene el paquete de 'express' que nos va a ayudar a trabajar con la app
const express = require('express');


//Con Router() vamos a poder crear diferentes rutas a nuestra necesidad, independientemente 
//de la aplicación.

const router = express.Router();



//Importo el módulo de controller.js
const { TipoRopaController } = require('./controller');



module.exports.TipoRopaAPI = (app) => {

    //Aca recibo la aplicación y le configuro las rutas

    router

    //Con esto genero una URL: http://localhost:3000/
    .get('/', TipoRopaController.getTiposRopa)    

    //Con esto genero una URL: http://localhost:3000/id
    .get('/:id', TipoRopaController.getTipoRopa)

    //Con esto genero una URL: http://localhost:3000/
    .post('/', TipoRopaController.createTipoRopa)

    //Con esto genero la URL: http://localhost:3000/
    .post('/:id', TipoRopaController.dropTipoRopa)

    app.use('/api/tiposRopa', router);
    //Aplicando router, en el caso del getTiposRopa (Primer GET)
    // mi URL quedaría: http://localhost:3000/api/tiposRopa/

    //En el caso del getTipoRopa (Segundo GET que busca por id), 
    //la URL quedaría: http://localhost:3000/api/tiposRopa/id

    //En el caso de POST, la URL queda: http://localhost:3000/api/tiposRopa/

    //En el caso de POST del Drop, la URL queda: http://localhost:3000/api/tiposRopa/id
}
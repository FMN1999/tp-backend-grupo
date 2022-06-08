//Traigo lo que contiene el paquete de 'express' que nos va a ayudar a trabajar con la app
const express = require('express');


//Con Router() vamos a poder crear diferentes rutas a nuestra necesidad, independientemente 
//de la aplicación.

const router = express.Router();



//Importo el módulo de controller.js
const { TemporadaController } = require('./controller');



module.exports.TemporadaAPI = (app) => {

    //Aca recibo la aplicación y le configuro las rutas

    router

    //Con esto genero una URL: http://localhost:3000/
    .get('/', TemporadaController.getTemporadas)    

    //Con esto genero una URL: http://localhost:3000/id
    .get('/:id', TemporadaController.getTemporada)

    //Con esto genero una URL: http://localhost:3000/
    .post('/', TemporadaController.createTemporada)

    //Con esto genero una URL: http://localhost:3000/id
    .delete('/:id', TemporadaController.deleteTemporada)

    //Con esto genero una URL: http://localhost:3000/id
    .put('/:id', TemporadaController.updateTemporada)

    app.use('/api/temporadas', router);

    //Aplicando router, en el caso del getTemporadas (Primer GET)
    // mi URL quedaría: http://localhost:3000/api/temporadas/

    //En el caso del getTemporada (Segundo GET que busca por id), 
    //la URL quedaría: http://localhost:3000/api/temporadas/id

    //En el caso de POST, la URL queda: http://localhost:3000/api/temporadas/

    //En el caso de PUT, http://localhost:3000/api/temporadas/id

    //En el caso de DELETE, http://localhost:3000/api/temporadas/id


}
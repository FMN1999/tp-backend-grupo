//Aca vamos a consumir cada uno de los módulos que agreguemos en 'models'


//Obtengo el paquete de express
const express = require('express');


//Traigo el paquete de debug. Esto servirá para el método de listen(), en la variable app.
//El segundo paréntesis servirá para mostrar el nombre del archivo donde trabaja la configuración
//del servidor, en este caso, este es el archivo
const debug = require('debug')("app:main");


const { TipoRopaAPI } = require('./models/tipoRopa');


//Defino el puerto para la aplicación.
const PORT = 3000;


//Creo una aplicación 'express'
const app = express();


//Con esto le doy la capacidad a nuestro servidor de recibir datos en el cuerpo de la petición
//que nos da. Esto nos servirá para el método POST
app.use(express.json());



TipoRopaAPI(app);



app.listen(PORT, () => {
    debug(`Servidor escuchando en el puerto: ${PORT}`)
})
//Importo el paquete de express
const express = require('express');

//Importo el paquete de mongoose
const mongoose = require('mongoose');

//lo importo para que me funcione y se vea en frontend angular
let cors = require("cors");

const {IndexAPI, NotFoundAPI} = require('./index/index');

require('dotenv').config();


const tempoRutas = require('./models/temporada/temporadaController');
const ropaRutas = require('./models/ropa/ropaController');
const precioRopaRutas = require('./models/precioRopa/precioRopaController');
const tipoRopaRutas = require('./models/tipoRopa/tipoRopaController');
const dbConnection = require('./models/db');

const app = express();

app.use(express.json());

//para el frontend angular
app.use(cors());

//Debe de colocarse primero el menú principal
IndexAPI(app);

//Luego se colocan las demás entidades/rutas
app.use("/api", precioRopaRutas);
app.use("/api", tempoRutas);
app.use("/api", tipoRopaRutas);
app.use("/api", ropaRutas);

//Por último se coloca lo de errores
NotFoundAPI(app);

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`));
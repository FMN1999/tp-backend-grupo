//Importo el paquete de express
const express = require('express');

//Importo el paquete de mongoose
const mongoose = require('mongoose');

const {IndexAPI, NotFoundAPI} = require('./index/index');

require('dotenv').config();


const tempoRutas = require('./models/temporada/temporadaController');
const ropaRutas = require('./models/ropa/ropaController');
const precioRopaRutas = require('./models/precioRopa/precioRopaController');
const dbConnection = require('./models/db');

const app = express();

app.use(express.json());

//Debe de colocarse primero el menú principal
IndexAPI(app);

//Luego se colocan las demás entidades/rutas
app.use("/api", precioRopaRutas);
app.use("/api", tempoRutas);
app.use("/api", ropaRutas);

//Por último se coloca lo de errores
NotFoundAPI(app);

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en: ${process.env.PORT}`));
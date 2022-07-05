//Importo el paquete de express
const express = require('express');

//Importo el paquete de mongoose
const mongoose = require('mongoose');

const {IndexAPI} = require('./index/index');

require('dotenv').config();


const tempoRutas = require('./models/temporada/temporadaController');
const ropaRutas = require('./models/ropa/ropaController');
const precioRopaRutas = require('./models/precioRopa/precioRopaController');
const empleadosRutas = require('./models/empleado/empleadoController')
const clientesRutas = require('./models/cliente/routes/controller');
const tipoRopaRutas = require('./models/tipoRopa/tipoRopaController');
const dbConnection = require('./models/db');

const app = express();

app.use(express.json());


IndexAPI(app);
app.use("/api", precioRopaRutas);
app.use("/api", tempoRutas);
app.use("/api", ropaRutas);
app.use("/api", empleadosRutas);
app.use("/api", clientesRutas);
app.use("/api", tipoRopaRutas);



app.listen(process.env.PORT, () => console.log(`Servidor corriendo en: ${process.env.PORT}`));
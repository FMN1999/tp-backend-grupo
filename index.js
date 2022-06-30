//Importo el paquete de express
const express = require('express');

//Importo el paquete de mongoose
const mongoose = require('mongoose');

const {IndexAPI} = require('./index/index');

require('dotenv').config();


const tempoRutas = require('./models/temporada/temporadaController');
const ropaRutas = require('./models/ropa/ropaController');
const dbConnection = require('./models/db');

const app = express();

app.use(express.json());


IndexAPI(app);
app.use("/api", tempoRutas);
app.use("/api", ropaRutas);



app.listen(process.env.PORT, () => console.log(`Server running on: ${process.env.PORT}`));
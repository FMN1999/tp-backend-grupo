const express = require('express');

const mongoose = require('mongoose');

const PORT = 3000;

const tempoRutas = require('./models/temporada/controller');
const dbConnection = require('./models/db');

const app = express();

app.use(express.json());
app.use("/api", tempoRutas);


app.listen(PORT, () => console.log(`Servidor escuchando: ${PORT}`));
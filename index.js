//Importo el paquete de express
const express = require('express');

//Importo el paquete de mongoose
const mongoose = require('mongoose');

const {IndexAPI, NotFoundAPI} = require('./index/index');
let cors = require("cors");
require('dotenv').config();


const tempoRutas = require('./models/temporada/temporadaController');
const ropaRutas = require('./models/ropa/ropaController');
const precioRopaRutas = require('./models/precioRopa/precioRopaController');
<<<<<<< HEAD
=======
const empleadosRutas = require('./models/empleado/empleadoController')
const clientesRutas = require('./models/cliente/routes/controller');
>>>>>>> branch-franco
const tipoRopaRutas = require('./models/tipoRopa/tipoRopaController');
const dbConnection = require('./models/db');

const app = express();

app.use(express.json());


app.use(cors());


//Debe de colocarse primero el menú principal
IndexAPI(app);

//Luego se colocan las demás entidades/rutas
app.use("/api", precioRopaRutas);
app.use("/api", tempoRutas);
app.use("/api", tipoRopaRutas);
app.use("/api", ropaRutas);
<<<<<<< HEAD
=======
app.use("/api", empleadosRutas);
app.use("/api", clientesRutas);
app.use(cors());
app.use("/api", tipoRopaRutas);
>>>>>>> branch-franco

//Por último se coloca lo de errores
NotFoundAPI(app);

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`));
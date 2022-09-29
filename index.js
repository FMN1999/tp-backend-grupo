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
const empleadosRutas = require('./models/empleado/empleadoController')
const clientesRutas = require('./models/cliente/clienteController');
const tipoRopaRutas = require('./models/tipoRopa/tipoRopaController');
const dbConnection = require('./models/db');
const comentariosRopaRutas = require('./models/comentarioRopa/comentarioRopaController');

const app = express();

app.use(express.json());


app.use(cors());


//Debe de colocarse primero el menú principal
IndexAPI(app);

//Luego se colocan las demás entidades/rutas
app.use("/api/ropas", ropaRutas);
app.use("/api/preciosRopa", precioRopaRutas);
app.use("/api/temporadas", tempoRutas);
app.use("/api/tiposRopa", tipoRopaRutas);
app.use("/api/empleados", empleadosRutas);
app.use("/api/clientes", clientesRutas);
app.use("/api/comentariosropa", comentariosRopaRutas);
app.use(cors());

//Por último se coloca lo de errores
NotFoundAPI(app);

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`));
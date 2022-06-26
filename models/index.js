const express = require ("express");
const mongoose = require ("mongoose");

const port = 3000;

const clientRoutes = require ("./cliente/routes/controller");
const precioRopaRoutes = require ("./precioRopa/routes/controller");
const dbConection = require("./db");

const app = express();

app.use (express.json());
app.use("/api", clientRoutes);
app.use("/api", precioRopaRoutes);


app.listen (port, () => console.log("server listening on port", port));
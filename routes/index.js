const express = require ('express');
const clientesRutas = require ('./cliente');
const comentariosRopaRutas = require ('./comentarioRopa');
const empleadosRutas = require ('./empleado');
const precioRopaRutas = require ('./precioRopa');
const ropaRutas = require ('./ropa');
const tempoRutas = require ('./temporada');
const tipoRopaRutas = require ('./tipoRopa');
const router = express.Router();

router.use("/api/ropas", ropaRutas);
router.use("/api/preciosRopa", precioRopaRutas);
router.use("/api/temporadas", tempoRutas);
router.use("/api/tiposRopa", tipoRopaRutas);
router.use("/api/empleados", empleadosRutas);
router.use("/api/clientes", clientesRutas);
router.use("/api/comentariosropa", comentariosRopaRutas);

module.exports = router;
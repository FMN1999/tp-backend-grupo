const debug = require('debug')('app:module-empleados-controller');


const { EmpleadoServices } = require('./services');



module.exports.EmpleadoController = {

    getEmpleado: async(req, res) => {
        try {
            let empleados = await EmpleadoServices.getAll()
            res.json(empleado);

        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    },

    getEmpleado: async(req, res) => {
        try {
            const {params : { id } } = req;
            let empleado = await EmpleadoServices.getById(id);
            res.json(empleado);
        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    },


    createEmpleado: async(req, res) => {
        try {
            const { body } = req;
            const insertedId = await EmpleadoServices.create(body);

            res.json(insertedId);

        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal server error"});
        }
    }
}
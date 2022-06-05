//Importo el módulo de MongoClient por medio del método de require. Con las llaves ( {MongoClient} )
//estoy realizando una desestructuración del objeto

const { MongoClient, ServerApiVersion } = require('mongodb');

const debug = require('debug')('app:module-database');


//Esta variable es el nombre de la base de datos.
const dbName = 'tienda_ropa';


//Esta variable será para la conexión a la base de datos
var conexion = null;



//Creo un módulo llamado 'Database', al cual le paso como parámetro 'coleccion', que es la 
//colección a la cual voy a acceder.
module.exports.Database = (coleccion) => new Promise( async(resolve, reject) => {


    //Dado que vamos a trabajar con código asíncrono, debe de usarse la cláusula try-catch
    try{

        //Verifico primero de si existe ya una conexión a la base de datos
        if(!conexion){

            //Creo la uri que luego servirá para crear el cliente de conexión
            const uri = "mongodb+srv://usuario:contraseña@ttads.tbykf.mongodb.net/?retryWrites=true&w=majority";

            //Genero un nuevo cliente de conexión. A este debo pasarle el uri.
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

            //Obtengo la conexión. Usamos await dado que la función connect() es asíncrona.
            conexion = await client.connect();
            debug("Nueva conexión con MongoDB Atlas");
        }

        debug('Reutilizando conexión');

        //De existir una conexión abierta, entonces paso el nombre de la base de datos(creada más arriba).
        const db = conexion.db(dbName);


        //Aca 'resuelvo' esa colección a la cual quiero conectarme (la que recibo como parámetro en 
        //el 'module.exports.Dabase'). Para esto uso resolve(). Esto me devolverá la colección 
        //desde la base de datos
        resolve(db.collection(coleccion))
        
    }catch(error) {
        reject(error);
    }

});
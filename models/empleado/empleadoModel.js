import Db from './db.js'
import {ObjectId} from "mongodb";

export default class EmpleadoModel {

    constructor() {
        this.db = new Db();
    }

    async create(empleado) {
        let emp;
        try {
            emp = await this.db.connect();
            const result = await emp.db("tienda_ropa").collection("empleados").insertOne(empleado);
        } catch(e){
            console.log(e);
        } finally {
            await emp.close()
        }

    }

    async getAll(){
        let emp;
        try {
            emp = await this.db.connect();
            const cursor = cli.db("").collection("empleados").find();
            return await cursor.toArray();
        } catch(e){
            console.log(e);
        } finally {
            await cli.close()
        }
    }

    async findOne(objectId){
        let emp;
        try {
            emp = await this.db.connect();
            const cursor = emp.db("").collection("empleados").find({_id: ObjectId(objectId)});
            return await cursor.toArray();
        } catch(e){
            console.log(e);
        } finally {
            await cli.close()
        }
    }
}
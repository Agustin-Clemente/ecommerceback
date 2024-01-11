import { MongoClient } from "mongodb"
import config from "../config.js"

class CnxMongoDB {

    static client = null
    static db = null
    static connection = false

    static conectar = async ()=>{
        try {
            console.log("Conectando a DB...")
            CnxMongoDB.client= new MongoClient(config.STRCXN)
            

       await CnxMongoDB.client.connect()
       console.log("DB conectada")

           CnxMongoDB.db= CnxMongoDB.client.db(config.BASE) //es como hacer use en cliente de MongoDB

            CnxMongoDB.connection = true

        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
       
    }
}

export default CnxMongoDB
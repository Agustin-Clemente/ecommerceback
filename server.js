import express from 'express'
import RouterProductos from './router/productos.js'
import RouterCarrito from './router/carrito.js'
import RouterUpload from './router/upload.js'
import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'

import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.use("/api/productos",new RouterProductos().start()) //base para todos los endpoints
app.use("/api/carrito",new RouterCarrito().start()) //base para todos los endpoints
app.use("/api/upload",new RouterUpload().start()) //base para todos los endpoints

//LISTEN DEL SERVIDOR
if (config.MODO_PERSISTENCIA=="DB") {
    await CnxMongoDB.conectar()
}


const PORT = config.PORT
const server = app.listen(PORT, ()=> console.log(`Servidor Express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

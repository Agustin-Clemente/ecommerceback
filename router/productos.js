import ControladorProductos from "../controller/productos.js"
import express from 'express'


class Router {
    constructor(){
        // RUTAS - ENDPOINTS
        this.router = express.Router()
        this.controladorProductos = new ControladorProductos()
    }

start(){

//CRUD
    this.router.get("/:id?", this.controladorProductos.obtenerProductos )

    this.router.post("/", this.controladorProductos.guardarProducto)

    this.router.delete("/:id", this.controladorProductos.borrarProducto)

    this.router.put("/:id", this.controladorProductos.actualizarProducto)

    return this.router //para que lo use el endpoint en server.js
}
}
export default Router
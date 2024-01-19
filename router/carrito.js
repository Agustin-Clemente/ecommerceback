import ControladorCarrito from "../controller/carrito.js"
import express from 'express'


class Router {
    constructor() {
        // RUTAS - ENDPOINTS
        this.router = express.Router()
        this.controladorCarrito = new ControladorCarrito()
    }

    start() {

        //CRUD
        this.router.get("/", this.controladorCarrito.obtenerCarrito)
        //this.router.get("/mp/feedback", this.controladorCarrito.feedback ) LO SACO PORQUE LO HAGO EN FRONT
        this.router.post("/mp/create_preference", this.controladorCarrito.createPreference)

        this.router.post("/", this.controladorCarrito.guardarCarrito)

        return this.router //para que lo use el endpoint en server.js
    }
}
export default Router
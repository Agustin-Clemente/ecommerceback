import ModeloProducto from "../model/DAO/productos/productos.js"
import ModelFactory from "../model/DAO/carrito/carritoFactory.js"
import config from "../config.js"

class Servicio {

    constructor(){
        //this.modeloProducto = new ModeloProducto()
        this.modeloCarrito = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

 obtenerCarrito =async () => {

        const carrito =await this.modeloCarrito.obtenerCarrito()
        return carrito 
    
}
 guardarCarrito =async carrito => {
    
        const carritoGuardado=await this.modeloCarrito.guardarCarrito(carrito)

    return carritoGuardado
    
    
}

}

export default Servicio
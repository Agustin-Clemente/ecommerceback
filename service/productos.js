import ModeloProducto from "../model/DAO/productos.js"
import ModelFactory from "../model/DAO/productosFactory.js"
import config from "../config.js"
import validar from "./validaciones/productos.js"

class Servicio {

    constructor(){
        //this.modeloProducto = new ModeloProducto()
        this.modeloProducto = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

 obtenerProductos =async id => {
    if(id){
        const producto =await this.modeloProducto.obtenerProducto(id)
        return producto 
    } else {
        const productos=await this.modeloProducto.obtenerProductos()
        return productos
    }
}
 guardarProducto =async producto => {
    const error = validar(producto)
    if (!error) {
        const productoGuardado=await this.modeloProducto.guardarProducto(producto)

    return productoGuardado
    } else {
        throw new Error(error.details[0].message)
    }
    
}
 actualizarProducto =async (id,producto) => {
    const productoActualizado = await this.modeloProducto.actualizarProducto(id,producto)
    return productoActualizado
}
 borrarProducto =async id => {
    const productoBorrado = await this.modeloProducto.borrarProducto(id)
    return productoBorrado
}
}

export default Servicio
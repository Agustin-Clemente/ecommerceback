import ModeloProducto from "../model/DAO/productos/productos.js"
import ModelFactory from "../model/DAO/carrito/carritoFactory.js"
import config from "../config.js"
import { preference } from './pago.js'


  

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

createPreference = async prefItems => {
    try{
    const preferences = await preference.create(prefItems)
      return preferences.id
    }
    catch(error){
        console.log( `Error en preferences MP: ${error.message}`)
        return null
    }
}

}

export default Servicio

/*   ME LO LLEVO AL FRONT
  {
        body: {
            /* items: [
                {
                    id: "1",
                  title: 'Mi producto',
                  quantity: 1,
                  unit_price: 2000
                }
              ], */
         /*  items:prefItems.items,
          back_urls: {
            "success": `http://localhost:${config.PORT}/api/carrito/mp/feedback`,
            "failure": `http://localhost:${config.PORT}/api/carrito/mp/feedback`,
            "pending": `http://localhost:${config.PORT}/api/carrito/mp/feedback`
        },
        auto_return: "approved",
    }
    
        }
      )  */
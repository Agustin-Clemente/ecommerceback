import ServicioCarrito from "../service/carrito.js"

class Controlador {

    constructor(){
        this.servicioCarrito = new ServicioCarrito()
    }

 obtenerCarrito = async (req, res)=>{

    const carrito = await this.servicioCarrito.obtenerCarrito()

    res.json(carrito)


    
}

 guardarCarrito = async(req,res) =>{
    try {
        const carrito = req.body

    const carritoGuardado = await this.servicioCarrito.guardarCarrito(carrito)

    

    res.json(carritoGuardado)
    } catch (error) {
        res.json({errMsg: error.message})
    }
    
}


}

export default Controlador
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

/* LO SACO PORQUE LO HAGO EN FRONT
    feedback = async (req, res)=>{

    //const info = req.query

    //console.log(info)

    const {payment_id, status, merchant_order_id} = req.query

    res.redirect(`http://localhost:3000/carrito?payment_id=${payment_id}&status=${status}&merchant_order_id=${merchant_order_id}`) //para que el frontend reciba los datos y pueda eliminar carrito si status está aprobado

} */

createPreference = async (req,res) => {
    try {
        const prefItems = req.body
    const preferenceId= await this.servicioCarrito.createPreference(prefItems)
    res.json({preferenceId})
    } catch (error) {
        res.json({ errMsg: error.message})
    }
    
}
}

export default Controlador
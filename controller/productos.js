import ServicioProducto from "../service/productos.js"

class Controlador {

    constructor(){
        this.servicioProducto = new ServicioProducto()
    }

 obtenerProductos = async (req, res)=>{
    const id = req.params.id

    const productos = await this.servicioProducto.obtenerProductos(id)

    res.json(productos)


    
}

 guardarProducto = async(req,res) =>{
    try {
        const producto = req.body

    const productoGuardado = await this.servicioProducto.guardarProducto(producto)

    

    res.json(productoGuardado)
    } catch (error) {
        res.json({errMsg: error.message})
    }
    
}

 actualizarProducto = async(req,res) =>{
    const {id} = req.params
    const producto = req.body
    //producto.id = id

    const productoActualizado= await this.servicioProducto.actualizarProducto(id,producto)

    res.json(productoActualizado)
}

 borrarProducto = async (req,res) => {
    const {id} = req.params

    const productoBorrado = await this.servicioProducto.borrarProducto(id)

    res.json(productoBorrado)
}
}

export default Controlador
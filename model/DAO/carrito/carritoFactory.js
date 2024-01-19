import ModeloCarrito from "../carrito/carrito.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case "DB":
                return new ModeloCarrito()
        }
    }
}

export default ModelFactory
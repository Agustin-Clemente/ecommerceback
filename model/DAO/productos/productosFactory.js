import ModeloProducto from "./productos.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case "DB":
                return new ModeloProducto()
        }
    }
}

export default ModelFactory
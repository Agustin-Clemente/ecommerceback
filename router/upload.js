import ControladorUpload from "../controller/upload.js"
import express from 'express'
import multer from "multer"

const storage = multer.diskStorage({ //configura almacenamiento de archivo que recibo
    destination: function(req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function(req,file,cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage: storage}) //middleware

class Router {
    constructor(){
        // RUTAS - ENDPOINTS
        this.router = express.Router()
        this.ControladorUpload = new ControladorUpload()
    }

start(){

//CRUD

    this.router.post("/", upload.single("archivo"), this.ControladorUpload.recibirArchivo) //single porque subimos un archivo unico y necesita la clave que es la que pusimos en el el FormData cuando enviamos la foto con data.append

    return this.router //para que lo use el endpoint en server.js
}
}
export default Router
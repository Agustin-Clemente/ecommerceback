import ServicioUpload from "../service/upload.js"

class Controlador {

    constructor() {
        this.servicioUpload = new ServicioUpload()
    }

    recibirArchivo = async (req, res) => {
        const file = req.file

        const urlFotoFTP = await this.servicioUpload.guardarArchivoFTP(file)
        res.json({ urlFotoFTP })
    }

}

export default Controlador
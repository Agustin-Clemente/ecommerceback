import config from "../config.js"
import ftp from 'basic-ftp'
import fs from 'fs'

class Servicio {

    constructor() {
    }

    //aca conectamos con 000webhost
    async subirArchivoFTP(file) {
        const timeout = 0
        const cliente = new ftp.Client(timeout)
        cliente.ftp.verbose = false
        //para que no imprima funciones de debug

        //Me conecto al servidor //para la conexion
        try {
            await cliente.access({
                host: config.FTP_HOST,
                user: config.FTP_USER,
                password: config.FTP_PASSWORD,
                secure: true
            })
            // conexion modo seguro

            console.log("FTP OK")

            console.log("Subiendo archivos por FTP")


            //la imagen
            const src = file.path
            const destination = `public_html/uploads/${file.filename}`

            await cliente.uploadFrom(src, destination)

            console.log("Upload OK FTP")

            //borramos archivo luego de subirlo
            await fs.promises.unlink(file.path)

            //cerramos conexion
            cliente.close()

            return `https://${config.FTP_USER}.000webhostapp.com/uploads/${file.filename}`

        } catch (error) {
            console.log(" Error de conexion: ", error.message)
            return ""
        }
    }


    guardarArchivoFTP = async file => {
        const urlFotoFTP = await this.subirArchivoFTP(file)

        return urlFotoFTP
    }
}

export default Servicio
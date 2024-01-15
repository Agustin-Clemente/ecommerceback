import config from "../config.js"
import ftp from 'basic-ftp'
import fs from 'fs'

class Servicio {

    constructor(){
    }

    async subirArchivoFTP(file) { //aca conectamos con 000webhost
        const timeout = 0
        const cliente = new ftp.Client(timeout)
        cliente.ftp.verbose = false //para que no imprima funciones de debug

        try {
            //Me conecto al servidor
        await cliente.access({ //para la conexion
            host: config.FTP_HOST,
            user:  config.FTP_USER,
            password: config.FTP_PASSWORD,
            secure: true // conexion modo seguro
        })

        console.log("FTP OK")

        console.log("Subiendo archivos por FTP")

        /* let bytesTotal = file.size
        cliente.trackProgress(info => {
            let porcentaje = parseInt((info.bytes *100 / bytesTotal))
            console.log(porcentaje + "%")
        }) */

        const src = file.path //la imagen
        const destination = `public_html/uploads/${file.filename}`

        await cliente.uploadFrom(src,destination)

        console.log("Upload OK FTP")

        //cliente.trackProgress() //cierro el trackprogress

        await fs.promises.unlink(file.path) //borramos archivo luego de subirlo

        cliente.close() //cerramos conexion

        return `https://${config.FTP_USER}.000webhostapp.com/uploads/${file.filename}`

        } catch (error) {
            console.log (" Error de conexion: ", error.message)
            return ""
        }
        

       
    }


 guardarArchivoFTP = async file => {
        const urlFotoFTP = await this.subirArchivoFTP(file)
       

    return urlFotoFTP
    
    
}

}

export default Servicio
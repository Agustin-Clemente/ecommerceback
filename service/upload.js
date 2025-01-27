import config from "../config.js"
import ftp from 'basic-ftp'
import fs from 'fs'
// const cloudinary = require('cloudinary').v2;
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET
  });


class Servicio {

    constructor() {
    }

    //aca conectamos con 000webhost
    /* async subirArchivoFTP(file) {
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
    } */




subirArchivoCloudinary = async file => {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
          folder: "uploads"
      });
      await fs.promises.unlink(file.path)
      return result.secure_url;

    } catch (error) {
      console.error("Error al subir a Cloudinary:", error);
      return "";
    }
}


    /* guardarArchivoFTP = async file => {
        const urlFotoFTP = await this.subirArchivoFTP(file)

        return urlFotoFTP
    } */
        guardarArchivoFTP = async file => {
            const urlFotoFTP = await this.subirArchivoCloudinary(file)
    
            return urlFotoFTP
        }
}

export default Servicio
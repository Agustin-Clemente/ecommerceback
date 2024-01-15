import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA 

const STRCXN = process.env.STRCXN
const BASE = process.env.BASE

const FTP_HOST = process.env.FTP_HOST
const FTP_USER = process.env.FTP_USER
const FTP_PASSWORD = process.env.FTP_PASSWORD

export default{
    MODO_PERSISTENCIA,
    PORT,
    STRCXN,
    BASE,
    FTP_HOST,
    FTP_PASSWORD,
    FTP_USER
}
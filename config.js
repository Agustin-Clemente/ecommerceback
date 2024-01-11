import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA 

const STRCXN = process.env.STRCXN
const BASE = process.env.BASE

export default{
    MODO_PERSISTENCIA,
    PORT,
    STRCXN,
    BASE
}
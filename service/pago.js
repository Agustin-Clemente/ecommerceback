
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
import config from '../config.js';

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: config.MP_AccessToken});


export const preference = new Preference(client); 
// lo exportamos para cuando nos pidan el ID de preferencia


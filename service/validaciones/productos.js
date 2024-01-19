import Joi from "joi";

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        descripcionCorta: Joi.string().required(),
        descripcionLarga: Joi.any(),
        foto: Joi.string().required(),
        edadDesde: Joi.any(),
        edadHasta: Joi.any(),
        envio: Joi.required()

    })

    const { error } = productoSchema.validate(producto)
    return error
}

export default validar
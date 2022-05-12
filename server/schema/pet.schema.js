const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(50);
const status = Joi.number().integer();

const createPetSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  status: status.required(),
})

const getPetSchema = Joi.object({
  id: id.required(),
})

const updatePetSchema = Joi.object({
  name,
  status,
})

const deletePetSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createPetSchema,
  getPetSchema,
  updatePetSchema,
  deletePetSchema
}

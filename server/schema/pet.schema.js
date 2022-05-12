const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(50);
const status = Joi.string().min(3).max(50);
const shelter = Joi.number().integer();
const owner = Joi.string().uuid()

const createPetSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  status: status.required(),
})

const getPetSchema = Joi.object({
  id: id.required(),
})

const updatePetSchema = Joi.object({
  id,
  name,
  status,
  shelter,
  owner,
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

const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(50);
const type = Joi.string().min(3).max(50);
const status = Joi.string().min(3).max(50);
const shelter = Joi.number().integer().allow(null);
const owner = Joi.string().uuid().allow(null, '');

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
  type,
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

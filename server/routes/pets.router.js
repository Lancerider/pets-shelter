const express = require("express");

const PetsService = require("../services/pets.service");
const validationHandler = require('../middlewares/validation.handler')
const { createPetSchema, updatePetSchema, getPetSchema } = require('../schema/pet.schema')

const petsService = new PetsService();

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const filteredPets = await petsService.find(req.query)

    res.status(200).send({
      data: filteredPets
    });
  } catch (error) {
    next(error)
  }
});

router.get("/:id",
  validationHandler(getPetSchema, 'params'),
  async (req, res, next) => {
    try {
      const pet = await petsService.findOne(req.params.id)

      res.status(200).send({
        data: pet
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put("/:id",
  validationHandler(updatePetSchema, 'body'),
  async (req, res, next) => {
    try {
      const pet = await petsService.update(req.params.id, req.body)

      res.status(200).send({
        data: pet
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router

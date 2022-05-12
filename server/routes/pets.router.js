const express = require("express");

const validationHandler = require('../middlewares/validation.handler')
const { createPetSchema, updatePetSchema, getPetSchema } = require('../schema/pet.schema')

class PetsRouter {
  constructor(petsService) {
    this.petsService = petsService
  }

  makeRouter() {
    const router = express.Router()

    router.get("/", async (req, res, next) => {
      try {
        const filteredPets = await this.petsService.find(req.query)

        res.status(200).send({
          data: filteredPets
        });
      } catch (error) {
        next(error)
      }
    });

    router.get("/types",
      async (req, res, next) => {
        try {
          const types = await this.petsService.types()

          res.status(200).send({
            data: types
          });
        } catch (error) {
          next(error);
        }
      }
    );

    router.get("/status",
      async (req, res, next) => {
        try {
          const statusList = await this.petsService.status()

          res.status(200).send({
            data: statusList
          });
        } catch (error) {
          next(error);
        }
      }
    );

    router.get("/:id",
      validationHandler(getPetSchema, 'params'),
      async (req, res, next) => {
        try {
          const pet = await this.petsService.findOne(req.params.id)

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
          const pet = await this.petsService.update(req.params.id, req.body)

          res.status(200).send({
            data: pet
          });
        } catch (error) {
          next(error);
        }
      }
    );

    return router
  }
}

module.exports = PetsRouter

const express = require("express");
const PetsService = require("../services/pets.service");

const petService = new PetsService();

const router = express.Router()

router.get("/", (req, res) => {

  const filteredPets = petService.find(req.query)

  res.status(200).send({
    data: filteredPets
  });
});

router.get("/:id", (req, res) => {

  const pet = petService.findOne(req.params.id)

  res.status(200).send({
    data: pet
  });
});

module.exports = router

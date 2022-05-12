const express = require("express");

class SheltersRouter {
  constructor(sheltersService) {
    this.sheltersService = sheltersService
  }

  makeRouter() {
    const router = express.Router()

    router.get("/", async (req, res, next) => {
      try {
        res.status(200).send({
          data: await this.sheltersService.getAll()
        });
      } catch (error) {
        next(error)
      }
    });

    return router
  }
}

module.exports = SheltersRouter

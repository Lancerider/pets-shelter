const express = require("express");

class OwnersRouter {
  constructor(ownersService) {
    this.ownersService = ownersService
  }

  makeRouter() {
    const router = express.Router()

    router.get("/", async (req, res, next) => {
      try {
        res.status(200).send({
          data: await this.ownersService.getAll(req.query)
        });
      } catch (error) {
        next(error)
      }
    });

    return router
  }
}

module.exports = OwnersRouter

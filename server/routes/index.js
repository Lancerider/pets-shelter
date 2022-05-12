const PetsRouter = require('./pets.router');
const OwnersRouter = require('./owners.router');
const SheltersRouter = require('./shelters.router');

const { petsService, ownersService, sheltersService } = require('../services');

const petsRouter = new PetsRouter(petsService)
const ownersRouter = new OwnersRouter(ownersService)
const sheltersRouter = new SheltersRouter(sheltersService)

function routerApi(app) {
  app.use('/pets', petsRouter.makeRouter());
  app.use('/owners', ownersRouter.makeRouter());
  app.use('/shelters', sheltersRouter.makeRouter());
}

module.exports = routerApi

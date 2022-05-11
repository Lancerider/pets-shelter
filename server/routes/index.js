const petsRouter = require('./pets.router')

function routerApi(app) {
  app.use('/pets', petsRouter)
}

module.exports = routerApi

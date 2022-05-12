const Database = require('../database');

const PetsService = require('./pets.service');
const OwnersService = require('./owners.service');
const SheltersService = require('./shelters.service');

const db = new Database();

const petsService = new PetsService(db)
const ownersService = new OwnersService(db)
const sheltersService = new SheltersService(db)

module.exports = { petsService, ownersService, sheltersService }

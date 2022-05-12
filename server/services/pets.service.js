const boom = require('@hapi/boom')

class PetsService {
  constructor(db) {
    this.database = db
  }

  async find(query) {
    const { types } = query

    let filteredPets = this.database.pets

    if (types && types.length > 0) {
      filteredPets = [...filteredPets.filter(pet => types.includes(pet.type))]
    }

    return filteredPets
  }

  async findOne(id) {
    const pet = this.database.pets.find(pet => pet.id === id)

    if (!pet) {
      throw boom.notFound('Pet not found')
    }

    return pet
  }

  async types() {
    return this.database.petTypes
  }

  async status() {
    return this.database.petStatus
  }

  async update(id, changes) {
    const index = this.database.pets.findIndex(pet => pet.id === id);

    if (index === -1) {
      throw boom.notFound('Pet not found');
    }

    const pet = this.database.pets[index]

    const changed = {}

    if(changes.name) {
      changed.name = changes.name
    }

    if(changes.status) {
      changed.status = this.findObjectFromId('petStatus', changes.status)

      if(changes.status.id !== pet.status.id) {
        changed.lastStatusUpdate = Date()
      }
    }

    if(changes.type) {
      changed.type = this.findObjectFromId('petTypes', changes.type)
    }

    if(changes.owner) {
      changed.owner = this.findObjectFromId('owners', changes.owner)
    }

    if(changes.shelter) {
      changed.shelter = this.findObjectFromId('shelters', changes.shelter)
    }

    changed.updatedAt = Date();

    changed.shelter = this.findObjectFromId('shelters', changes.shelter)

    this.database.pets[index] = {
      ...pet,
      ...changed
    };

    return this.database.pets[index]
  }

  findObjectFromId(key, id) {
    const objectFromId = this.database[key].find(petData => petData.id === id)

    if (!objectFromId) {
      throw boom.conflict(`key ${key} doesn't exist`)
    }

    return objectFromId
  }
}

module.exports = PetsService

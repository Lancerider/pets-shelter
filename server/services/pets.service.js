const boom = require('@hapi/boom')
const { faker } = require('@faker-js/faker')

class PetsService {
  constructor() {
    this.petTypes = []
    this.shelters = []
    this.petStatus = []
    this.pets = []
    this.generate()
  }

  generate() {
    this.petTypes = [
      {
        id: 1,
        key: 'cat',
        title: 'Cat'
      },
      {
        id: 2,
        key: 'dog',
        title: 'Dog'
      }
    ]

    this.shelters =  [
      {
        id: 1,
        name: faker.company.companyName(),
        address: faker.address.streetAddress()
      }
    ]

    this.petStatus = [
      {
        id: 1,
        key: 'adopted',
        title: 'Adopted'
      },
      {
        id: 2,
        key: 'in-shelter',
        title: 'In shelter'
      },
    ]

    this.owners = [...Array(20)].map(() => {
      return {
          id: faker.datatype.uuid(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          address: faker.address.streetAddress(true)
        }
    })

    this.pets = [...Array(10)].map(() => {
      const status = faker.helpers.arrayElement(this.petStatus)

      return {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        status,
        type: faker.helpers.arrayElement(this.petTypes),
        shelter: faker.helpers.arrayElement(this.shelters),
        owner: status.type === 'adopted' ? faker.helpers.arrayElement(this.owners) : null,
      }
    })
  }

  find(query) {
    const { types } = query

    let filteredPets = this.pets

    if (types && types.length > 0) {
      filteredPets = [...filteredPets.filter(pet => types.includes(pet.type))]
    }

    return filteredPets
  }

  findOne(id) {
    const pet = this.pets[id]

    if (!pet) {
      throw boom.notFound('Pet not found')
    }

    return pet
  }
}

module.exports = PetsService

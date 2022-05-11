class PetsService {
  constructor() {
    this.petTypes = []
    this.shelters = []
    this.petStatus = []
    this.pets = []
    this.generate()
  }

  generate() {
    this.petTypes = {
      1: {
        id: 1,
        key: 'cat',
        title: 'Cat'
      },
      2: {
        id: 2,
        key: 'dog',
        title: 'Dog'
      }
    }

    this.shelters = {
      1: {
        id: 1,
        name: 'CatDog',
        address: 'My House'
      }
    }

    this.petStatus = {
      1: {
        id: 1,
        key: 'adopted',
        title: 'Adopted'
      },
      2: {
        id: 2,
        key: 'in-shelter',
        title: 'In shelter'
      },
    }

    this.pets = {
      1: {
        id: 1,
        type: 1,
        name: 'Vasia',
        status: 1,
        shelter: 1,
        owner: 1,
        someOther: 'Some Other',
      },
      2: {
        id: 2,
        type: 1,
        name: 'Musci',
        status: 2,
        shelter: 1,
        owner: 2,
        someOther: 'New Value',
      }
    }
  }

  find(query) {
    const { types } = query

    let filteredPets = Object.values(this.pets)

    if (types && types.length > 0) {
      filteredPets = [...filteredPets.filter(pet => types.includes(pet.type))]
    }

    return filteredPets
  }

  findOne(id) {
    const pet = this.pets[id]

    return pet
  }
}

module.exports = PetsService

const { faker } = require('@faker-js/faker')

class Database {
  constructor() {
      this.petTypes = [
        {
          id: 'cat',
          title: 'Cat'
        },
        {
          id: 'dog',
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
          id: 'adopted',
          title: 'Adopted'
        },
        {
          id: 'in-shelter',
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
}

module.exports = Database

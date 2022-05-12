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

      const owners = [...Array(20)].map(() => {
        return {
          id: faker.datatype.uuid(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          address: faker.address.streetAddress(true)
        }
      })

      const noOwner = {
        id: '65ac1a69-d25e-4fa1-8b46-000000000000',
        name: 'None',
        address: ''
      }

      this.owners = [noOwner, ...owners]

      this.pets = [...Array(10)].map(() => {
        const status = faker.helpers.arrayElement(this.petStatus)

        const dateCreated = faker.date.recent(30)
        const dateUpdated = faker.date.between(dateCreated)

        return {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          status,
          type: faker.helpers.arrayElement(this.petTypes),
          shelter: faker.helpers.arrayElement(this.shelters),
          owner: status.id === 'adopted' ? faker.helpers.arrayElement(owners) : noOwner,
          createdAt: dateCreated,
          lastStatusUpdate: dateUpdated,
          updatedAt: dateUpdated,
        }
      })
  }
}

module.exports = Database

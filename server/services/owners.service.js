class OwnersService {
  constructor(db) {
    this.database = db
  }

  async getAll(query) {
    const { shelter } = query

    let filteredOwners = this.database.owners

    if (shelter) {
      filteredOwners = [...filteredOwners.filter(owner => owner.shelter.id === shelter)]
    }

    return filteredOwners
  }
}

module.exports = OwnersService

class SheltersService {
  constructor(db) {
    this.database = db
  }

  async getAll() {
    return this.database.shelters
  }
}

module.exports = SheltersService

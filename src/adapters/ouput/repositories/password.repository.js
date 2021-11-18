class PasswordRepository {
    constructor({ userDB }) {
        this.collection = userDB.collection('passwords');
    }

    async findAll() {
        return this.collection.find({}).toArray();
    }

    async create(data) {
        this.collection.insertOne(data);
    }
}

module.exports = PasswordRepository;
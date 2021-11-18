class UserRepository {
    constructor({ userDB }) {
        this.collection = userDB.collection('users');
    }

    async findALl() {
        return this.collection.find({}).toArray();
    }

    async create(data) {
        this.collection.insertOne(data);
    }
}

module.exports = UserRepository;
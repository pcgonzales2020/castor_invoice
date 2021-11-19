const schema = require('../schema');
const AppError = require('../../../common/error');

class UserRepository {
    constructor({ userDB }) {
        this.collection = userDB.collection('users');
    }

    async findAll() {
        return this.collection.find({}).toArray();
    }

    async create(data) {
        try {
            await schema.users.validateAsync(data);
        } catch (error) {
            throw new AppError('ERR_VALIDATION', error.message);
        }

        this.collection.insertOne(data);
    }

    async isUsernameUnique(username) {
        const entry = await this.collection.findOne({ username });
        return entry === null;
    }
}

module.exports = UserRepository;
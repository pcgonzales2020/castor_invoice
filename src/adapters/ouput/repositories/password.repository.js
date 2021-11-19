const schema = require('../schema');
const AppError = require('../../../common/error');

class PasswordRepository {
    constructor({ userDB }) {
        this.collection = userDB.collection('passwords');
    }

    async findAll() {
        return this.collection.find({}).toArray();
    }

    async create(data) {
        try {
            await schema.passwords.validateAsync(data);
        } catch (error) {
            throw new AppError('ERR_VALIDATION', error.message);
        }

        this.collection.insertOne(data);
    }
}

module.exports = PasswordRepository;
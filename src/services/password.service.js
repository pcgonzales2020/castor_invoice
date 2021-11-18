// const bcrypt = require('bcrypt');
const db = require('../common/database/mongo');

const collection = db.collection('passwords');

class PasswordService {
    async create(data) {
        const password = {
            userId: data.userId,
            password: data.password,
        };
        collection.insertOne(password);

        return password;
    }
}

module.exports = PasswordService;
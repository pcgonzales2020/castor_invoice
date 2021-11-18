const bcrypt = require('bcrypt');
const db = require('../common/database/mongo');

const collectionUsers = db.collection('users');
const collectionPasswords = db.collection('passwords');

class UserService {
    async getAll() {
        return collectionUsers.find({}).toArray();
    }

    async create(data, password) {
        await collectionUsers.insertOne(data);

        const hashedPassword = await bcrypt.hash(password, 10);
        const passwordData = {
            userId: data._id.toString(),
            password: hashedPassword,
        };

        await collectionPasswords.insertOne(passwordData);

        return data;
    }
}

module.exports = UserService;
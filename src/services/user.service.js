const bcrypt = require('bcrypt');
const AppError = require('../common/error');

class UserService {
    constructor({ userRepository, passwordRepository }) {
        this.userRepository = userRepository;
        this.passwordRepository = passwordRepository;
    }

    async getAll() {
        return this.userRepository.findAll();
    }

    async create(data, password) {
        if (!await this.userRepository.isUsernameUnique(data.username)) {
            throw new AppError('ERR_USERNAME_TAKEN', 'Username has been taken');
        }

        await this.userRepository.create(data);

        const hashedPassword = await bcrypt.hash(password, 10);
        const passwordData = {
            userId: data._id.toString(),
            password: hashedPassword,
        };

        await this.passwordRepository.create(passwordData);
        return data;
    }
}

module.exports = UserService;
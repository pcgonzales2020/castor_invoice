const bcrypt = require('bcrypt');

class UserService {
    constructor({ userRepository, passwordRepository }) {
        this.userRepository = userRepository;
        this.passwordRepository = passwordRepository;
    }

    async getAll() {
        return this.userRepository.findAll();
    }

    async create(data, password) {
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
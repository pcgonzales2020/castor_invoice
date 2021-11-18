const { createController } = require('awilix-express');

class PasswordController {
    constructor({ passwordService }) {
        this.passwordService = passwordService;
    }

    async create(req, res) {
        try {
            const result = await this.passwordService.create(req.body);
            res.send(result);
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    }
}

module.exports = createController(PasswordController)
    .prefix('/password')
    .post('', 'create');
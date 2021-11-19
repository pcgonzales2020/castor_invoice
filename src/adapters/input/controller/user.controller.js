const { createController } = require('awilix-express');

class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    async getAll(req, res) {
        const result = await this.userService.getAll();
        res.send(result);
    }

    async create(req, res) {
        const data = {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        };

        const result = await this.userService.create(data, req.body.password);
        res.send(result);
    }
}

module.exports = createController(UserController)
    .prefix('/users')
    .get('', 'getAll')
    .post('', 'create');

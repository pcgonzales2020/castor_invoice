const { createController } = require('awilix-express');

class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    async getAll(req, res) {
        try {
            const result = await this.userService.getAll();
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }

    async create(req, res) {
        try {
            const data = {
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
            };

            const result = await this.userService.create(data, req.body.password);
            res.send(result);
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    }
}

module.exports = createController(UserController)
    .prefix('/users')
    .get('', 'getAll')
    .post('', 'create');

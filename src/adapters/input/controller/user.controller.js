const { createController } = require('awilix-express');
const AppError = require('../../../common/error');

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
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            };

            const result = await this.userService.create(data, req.body.password);
            res.send(result);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(400);
                res.send(error);
            } else {
                throw error;
            }
        }
    }
}

module.exports = createController(UserController)
    .prefix('/users')
    .get('', 'getAll')
    .post('', 'create');

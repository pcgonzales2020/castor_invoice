const { createController } = require('awilix-express');

class HealthController {
    constructor({ healthService }) {
        this.healthService = healthService;
    }

    get(req, res) {
        const result = this.healthService.get();
        res.send(result);
    }
}

module.exports = createController(HealthController)
    .prefix('/health')
    .get('', 'get');
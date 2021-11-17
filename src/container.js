const { asClass, ...awilix } = require('awilix');
const HealthService = require('./services/health.service');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

// services
container.register('healthService', asClass(HealthService).scoped());

module.exports = container;
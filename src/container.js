const { asClass, ...awilix } = require('awilix');
const HealthService = require('./services/health.service');
const UserService = require('./services/user.service');
const PasswordService = require('./services/password.service');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

// services
container.register('healthService', asClass(HealthService).scoped());
container.register('userService', asClass(UserService).scoped());
container.register('passwordService', asClass(PasswordService).scoped());

module.exports = container;
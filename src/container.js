const { asClass, asValue, ...awilix } = require('awilix');
const { MongoClient } = require('mongodb');
const HealthService = require('./services/health.service');
const UserService = require('./services/user.service');
const UserRepository = require('./adapters/ouput/repositories/user.repository');
const PasswordRepository = require('./adapters/ouput/repositories/password.repository');

const cfg = require('./config/index');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

// services
container.register('healthService', asClass(HealthService).scoped());
container.register('userService', asClass(UserService).scoped());
container.register('userRepository', asClass(UserRepository).scoped());
container.register('passwordRepository', asClass(PasswordRepository).scoped());

// database connection
const client = new MongoClient(cfg.MONGO_CONNECTION);
client.connect();

container.register("userDB", asValue(client.db('invoice_users')));

module.exports = container;
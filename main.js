const express = require("express");
const { scopePerRequest, loadControllers } = require('awilix-express');
const { errorHandler } = require('./src/common/middlewares');

const app = express();

app.use(express.json());

// get container
const container = require('./src/container');

// register container
app.use(scopePerRequest(container));
app.use(loadControllers('src/adapters/input/controller/*.js', { cwd: __dirname }));

// error
app.use(errorHandler);

// start server
const port = 3000;
app.listen(port, () => {
    console.log('Server running on port: ', port);
});
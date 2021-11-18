const express = require("express");
const { scopePerRequest, loadControllers } = require('awilix-express');

const app = express();

app.use(express.json());

// get container
const container = require('./src/container');

// register container
app.use(scopePerRequest(container));
app.use(loadControllers('src/adapters/input/controller/*.js', { cwd: __dirname }));

// start server
const port = 3000;
app.listen(port, () => {
    console.log('Server running on port: ', port);
});
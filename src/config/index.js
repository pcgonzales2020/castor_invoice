/* eslint-disable import/no-dynamic-require */
const filename = `./${process.env.APP_ENV || "development"}.js`;
module.exports = require(filename);
const AppError = require('./error');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        res.status(400);
        res.send(err);
    } else {
        res.status(500).send(err.message);
    }
}

module.exports = {
    errorHandler,
};
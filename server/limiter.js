const rateLimit = require('express-rate-limit');

const limiter = (rate, minute, message) => rateLimit({
    max: rate,
    windowMs: minute * 60 * 1000,
    message: message
});

module.exports = (app) => {
    app.use(`/api/data/ergo-news`, limiter(5, 5, "Try again in 5 minutes" ));
    app.use(`/api/data/cardano-news`, limiter(5, 5, "Try again in 5 minutes" ));
}
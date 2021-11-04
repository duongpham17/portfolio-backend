const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');

module.exports = (app) => {

    app.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true,
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }));

    app.use(mongoSanitize());

    app.use(xss());
}
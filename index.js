const express = require('express');
const app = express();

require('dotenv').config({path: "./config.env" });

require('./server/security')(app);

require('./server/limiter')(app);

require('./server/parser')(app, express);

require('./server/routes')(app);

require('./server/port')(app);
const express = require('express');
const mwConfig = require('../config/mwConfig');
const server = express();

mwConfig(server);


module.exports = server;
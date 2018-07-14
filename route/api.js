const express = require('express')
const routesAPI = express.Router();

const Main = require('./../controllers/main')

routesAPI.get('/', Main);

module.exports = routesAPI;
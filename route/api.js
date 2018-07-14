const express = require('express')
const routesAPI = express.Router();

const Main = require('./../controllers/main')

routesAPI.post('/tensorflow', Main);

module.exports = routesAPI;
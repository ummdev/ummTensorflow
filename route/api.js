const express = require('express')
const routesAPI = express.Router();

const Main = require('./../controllers/main')
const Tag = require('./../controllers/tag')

routesAPI.get('/tag', Tag);
routesAPI.post('/tensorflow', Main);

module.exports = routesAPI;
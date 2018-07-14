const express = require('express')
const router = express.Router();

const Main = require('./../controllers/main')

router.get('/', Main);

module.exports = router;
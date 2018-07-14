const express = require('express')
const routes = require('./route/api')
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

// using arrow syntax
app.use((req, res, next) => {
    return res.json('404_NOT_SECURITY')
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000, function() {
    console.log('Starting TensorFlow Umm');
});

module.exports = app;

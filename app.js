const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { navigate } = require('./service');
const routes = require('./router');

navigate();

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.use('/', routes);

module.exports = app;
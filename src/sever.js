'use strict';
require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const app = express();
const notFoundHandler = require('./middleware/404');
const internalErrorHandler = require('./middleware/500')
const router = require('./auth/router');



app.use(express.json());

app.use(express.urlencoded({ extended: true }));//check
app.use(router);


app.use("*", notFoundHandler);
app.use(internalErrorHandler);

function start() {
    app.listen(port, () => {
        console.log(`Server Listening on PORT ${port}`)
    })
}

module.exports = {
    app,
    start,
}

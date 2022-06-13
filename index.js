'use strict';
require('dotenv').config();
const server = require('./src/sever');
const { db } = require("./src/auth/models/index");



db.sync()
    .then(() => {
        server.start();
    })
    .catch(console.error);
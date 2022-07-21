const express = require('express');
const router = require('../routes');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static(path.join(__dirname, '../../frontend')));

module.exports = app;

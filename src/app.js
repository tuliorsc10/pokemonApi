const express = require('express');
const cors = require('cors');
const routes = require('./routes/index')

const app = express();

routes(app);



module.exports = app;
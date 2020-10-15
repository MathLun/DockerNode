require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const routes = require('./routes');

const app = express();

database.mongooseConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/tasks', routes.tasksRouter);

module.exports = { app };

const express = require('express');
const tasksRouter = express.Router();

const tasksControllers = require('./api/tasks/controllers');

tasksRouter.route('/')
    .get(tasksControllers.getAllTasks)
    .post(tasksControllers.createNewTask);

module.exports = { tasksRouter };
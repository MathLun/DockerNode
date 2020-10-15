const { model } = require('../TasksSchema');
const createNewTask = require('./CreateTask');
const getAllTasks   = require('./GetAllTasks');

module.exports = { createNewTask, getAllTasks };
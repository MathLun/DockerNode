const Tasks = require('../TasksSchema');

const getAllTasks = async (req, res) => {
   const tasks = await Tasks.find();
   
   res.json(tasks);
};

module.exports = getAllTasks;
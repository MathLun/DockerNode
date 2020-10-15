const Task = require('../TasksSchema');

const createNewTask = async (req, res, next) => {
    const { title, body } = req.body;
    const newTask = new Task({ title, body });

    newTask.save((err, task) => {
        if(err) throw err;
        res.status(202).json(task);
    });
};

module.exports = createNewTask;
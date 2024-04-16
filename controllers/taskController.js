const taskModel = require('../models/task.model')

const getTasks = async (req, res) => {
    const allTasks = await taskModel.find()
    console.log('get')
    res.json(allTasks)
}


const addTask = (req, res) => {
    console.log(req.body)
    taskModel.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.status(500).json(err.errorResponse.errmsg))
}

module.exports = { getTasks, addTask }  
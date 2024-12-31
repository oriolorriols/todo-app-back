const taskModel = require('../models/task.model')

const schedule = require('node-schedule')

const getTasks = async (req, res) => {
    const allTasks = await taskModel.find()
    console.log('get tasks')
    res.status(202).json(allTasks)
}

const getTasksbyID = (req, res) => {
    taskModel.findOne(req.params)
   .then(task => res.status(202).json(task))
   .catch(err => res.status(500).json(err))
}

const addTask = (req, res) => {
    taskModel.create(req.body)
    .then(task => res.status(202).json(task))
    .catch(err => res.status(500).json(err.errorResponse.errmsg))
}

const updateTask = (req, res) => {
    const data = req.body
    taskModel.findOneAndUpdate(req.params, data, {new: true})
    .then(task => res.status(202).json(task))
    .catch(err => res.status(500).json(err))
}

const deleteTask = (req, res) => {
    taskModel.findOneAndDelete(req.params)
    .then(task => {
        if(task){
            res.status(202).json(`Deleted task: ${task.id}`)
        } else {
            res.status(404).json('This task does not exist')}
        })
    .catch(err => res.status(500).json(err))
}

async function backendBot(req, res) {
    try {
        const response = await fetch('https://todo-app-back-20dl.onrender.com/tasks')
        const data = await response.json();
        console.log('El bot está fucionando cada 15 min');
    } catch (error) {
        console.log('Error: ', error);
    }
}

schedule.scheduleJob('*/15 * * * *', async () => { 
    await backendBot();
});

module.exports = { getTasks, addTask, getTasksbyID, deleteTask, updateTask }  
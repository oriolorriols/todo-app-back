const { Router } = require('express')
const { getTasks, addTask} = require('../controllers/taskController')

const taskRouter = Router()

 
taskRouter.get("/", getTasks)
taskRouter.post("/", addTask)







module.exports = { taskRouter }

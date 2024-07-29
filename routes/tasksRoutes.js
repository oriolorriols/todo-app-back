const { Router } = require('express')
const { getTasks, addTask, getTasksbyID, deleteTask, updateTask} = require('../controllers/taskController')

const taskRouter = Router()

 
taskRouter.get("/", getTasks)
taskRouter.get("/:id", getTasksbyID)
taskRouter.post("/", addTask)
taskRouter.delete("/:id", deleteTask)
taskRouter.put("/:id", updateTask)






module.exports = { taskRouter }

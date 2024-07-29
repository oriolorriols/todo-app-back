const { Router } = require('express')
const { getColumns, addColumn, deleteColumn, updateColumn} = require('../controllers/columnController')

const columnRouter = Router()

 
columnRouter.get("/", getColumns)
columnRouter.post("/", addColumn)
columnRouter.delete("/:id", deleteColumn)
columnRouter.put("/:id", updateColumn)







module.exports = { columnRouter }

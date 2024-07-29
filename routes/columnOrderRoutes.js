const { Router } = require('express')
const { getColumnOrder, updateOrderedColumn, createOrderedColumn} = require('../controllers/columnOrderController')

const columnOrderRouter = Router()

 
columnOrderRouter.get("/", getColumnOrder)
columnOrderRouter.put("/", updateOrderedColumn)
columnOrderRouter.post("/", createOrderedColumn)






module.exports = { columnOrderRouter }

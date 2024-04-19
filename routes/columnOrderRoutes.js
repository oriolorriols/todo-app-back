const { Router } = require('express')
const { getColumnOrder, updateOrderedColumn} = require('../controllers/columnOrderController')

const columnOrderRouter = Router()

 
columnOrderRouter.get("/", getColumnOrder)
columnOrderRouter.put("/", updateOrderedColumn)







module.exports = { columnOrderRouter }

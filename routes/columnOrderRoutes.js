const { Router } = require('express')
const { getColumnOrder, addOrderedColumn} = require('../controllers/columnOrderController')

const columnOrderRouter = Router()

 
columnOrderRouter.get("/", getColumnOrder)
columnOrderRouter.post("/", addOrderedColumn)







module.exports = { columnOrderRouter }

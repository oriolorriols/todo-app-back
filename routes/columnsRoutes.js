const { Router } = require('express')
const { getColumns, addColumn} = require('../controllers/columnController')

const columnRouter = Router()

 
columnRouter.get("/", getColumns)
columnRouter.post("/", addColumn)







module.exports = { columnRouter }

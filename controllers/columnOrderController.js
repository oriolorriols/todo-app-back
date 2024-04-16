const columnOrderModel = require('../models/columnorder.model')

const getColumnOrder = async (req, res) => {
    const allColumns = await columnOrderModel.find()
    console.log('get')
    res.json(allColumns)
}


const addOrderedColumn = (req, res) => {
    console.log(req.body)
    columnOrderModel.create(req.body)
    .then(column => res.json(column))
    .catch(err => res.status(500).json(err.errorResponse.errmsg))
}

module.exports = { getColumnOrder, addOrderedColumn }  
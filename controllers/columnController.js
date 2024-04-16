const columnModel = require('../models/column.model')

const getColumns = async (req, res) => {
    const allColumns = await columnModel.find()
    console.log('get')
    res.json(allColumns)
}


const addColumn = (req, res) => {
    console.log(req.body)
    columnModel.create(req.body)
    .then(column => res.json(column))
    .catch(err => res.status(500).json(err.errorResponse.errmsg))
}

module.exports = { getColumns, addColumn }  
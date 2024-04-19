const columnModel = require('../models/column.model')

const getColumns = async (req, res) => {
    const allColumns = await columnModel.find()
    res.status(202).json(allColumns)
}

const addColumn = (req, res) => {
    columnModel.create(req.body)
    .then(column => res.json(column))
    .catch(err => res.status(500).json(err.errorResponse.errmsg))
}

const deleteColumn = (req, res) => {
    columnModel.findOneAndDelete(req.params)
    .then(column => {
        if(column){
            res.status(202).json(`Deleted column: ${column.id}`)
        } else {
            res.status(404).json('This column does not exist')}
        })
    .catch(err => res.status(500).json(err))
}

const updateColumn = (req, res) => {
    const data = req.body
    columnModel.findOneAndUpdate(req.params, data, {new: true})
    .then(column => res.status(202).json(column))
    .catch(err => res.status(500).json(err))
}


module.exports = { getColumns, addColumn, deleteColumn, updateColumn }  
const columnOrderModel = require('../models/columnorder.model')

const getColumnOrder = async (req, res) => {
    const order = await columnOrderModel.find()
    console.log('get order')
    res.status(202).json(order)
}

const updateOrderedColumn = (req, res) => {
    const data = req.body;
    columnOrderModel.findOneAndUpdate({}, { columnOrder: data.columnOrder }, { new: true })
    .then(order => res.status(202).json(order))
    .catch(err => res.status(500).json(err))
}

/*
const updateOrderedColumn = (req, res) => {
    const data = req.body
    columnOrderModel.findOneAndUpdate({}, data, {new: true})
    .then(order => res.status(202).json(order))
    .catch(err => res.status(500).json(err))
}
*/

const createOrderedColumn = (req, res) => {
    columnOrderModel.create(req.body)
    .then(order => res.status(202).json(order))
    .catch(err => res.status(500).json(err))
}

module.exports = { getColumnOrder, updateOrderedColumn, createOrderedColumn }  
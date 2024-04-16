const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const columnOrderSchema = new Schema({
    columnOrder: [String]
});

const columnOrderModel = mongoose.model("columnOrderModel", columnOrderSchema);
 
module.exports = columnOrderModel
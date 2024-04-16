const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const columnSchema = new Schema({
  id: {
    type: String,
    required: true, 
    unique: true,
    },
  title:{
    type: String,
    required: true
    },
    taskIds: {
    type: [String],
    required: true
    },
});

const columnModel = mongoose.model("columnModel", columnSchema);
 
module.exports = columnModel
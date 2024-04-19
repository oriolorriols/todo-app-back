const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: {
    type: String,
    required: true, 
    unique: true,
    },
  title:{
    type: String,
    required: true
    },
  description: String,
  dueDate: {
    type: String,
    required: true
    },
  status: String,
  
}, {timestamps: true});

const taskModel = mongoose.model("taskModel", taskSchema);
 
module.exports = taskModel
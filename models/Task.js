const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [25, 'Name can not more than 25 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);

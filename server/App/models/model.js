const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    doneOrNot: {
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;

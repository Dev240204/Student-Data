const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        default : true
    },
    rollNo : {
        type : Number,
        default : true,
        min : 1
    },
    branch : {
        type : String,
        default : true
    }
})

const Student = mongoose.model('Student',StudentSchema);
module.exports = Student;
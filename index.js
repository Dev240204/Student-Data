const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');
const Student = require('./models/student');
const app = express();
//mongodb://127.0.0.1:27017/studentManageApp

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://admin:password@localhost:27017')
    .then(()=>{
        console.log("Mongo DB Connection Open!!");
    })
    .catch(()=>{
        console.log("Mongo DB Connection failed!!");
    })

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride('_method'));

// Displaying All students
app.get('/students',async (req,res)=>{
    const students = await Student.find({});
    res.render('students/index',{students});
})

// Adding New Student Data
app.get('/students/new',(req,res)=>{
    res.render('students/new');
})
app.post('/students',async (req,res)=>{
    const student = new Student(req.body);
    await student.save();
    res.redirect('/students');
})

// Editing the existing Student Detail
app.get('/students/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const student = await Student.findById(id);
    res.render('students/edit',{student})
})
app.patch('/students/:id',async (req,res)=>{
    const {id} = req.params;
    const student = await Student.findByIdAndUpdate(id,req.body,{runValidators : true , new:true});
    res.redirect('/students');
})

// Delete Student Details
app.delete('/students/:id', async (req,res)=>{
    const {id} = req.params;
    const student = await Student.findByIdAndDelete(id);
    res.redirect('/students');
})

app.listen(3000,()=>{
    console.log("Listening on 3000!!");
})
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

//get api to find the students data or to fetch the students data
router.get("/", async(req,res) => {
    try{
        const students = await Student.find();//it will fetch all the students data (we have to use find())
        res.json(students);
    } catch(error){
        res.status(500).send("server error")
    }
})

//post api to post the student data
router.post("/", async(req,res) => {
    const {name, age, course} = req.body;
    try{
        const newStudent = new Student({
            name,
            age,
            course
        });
        const student = await newStudent.save();// save method to save the student in the database
        res.json(student);
    }catch(error){
        res.status(500).send("server error")
    }
})

module.exports = router;
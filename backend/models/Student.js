// we have to create the model schema to our application

const mongoose = require("mongoose");

const StudnetSchema = new mongoose.mongoose.Schema({
    name:{
        type:String,
        required :true,
    },
    age:{
        type:Number,
        required :true,
    },
    course:{
        type:String,
        required :true,
    }
})

module.exports = mongoose.model("GaneshSchool", StudnetSchema)
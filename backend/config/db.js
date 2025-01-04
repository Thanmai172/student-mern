const mongoose = require("mongoose"); // Bridge or ci=onnect that we are going to do for node/express to mongodb
const dotenv = require("dotenv");// it is used to load the env variables

dotenv.config(); // it will load the environment variables

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log("mongodb is successfully connected")
    } catch(error){
        console.log("unable to connect to database")
    }
}

module.exports = connectDB;
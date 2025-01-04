const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors"); // when we trying to access one server from another server..

dotenv.config(); // to load teh env variables

//connect to the database
connectDB();

const app = express(); // this will gives us to create the express server with this app variables

// whenever we are doing the api, we have to use middleware 
app.use(express.json())
app.use(cors());

// define the routes
app.use("/api/students", require("./routes/studentRoutes"))

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server is running at the port number 5004"))
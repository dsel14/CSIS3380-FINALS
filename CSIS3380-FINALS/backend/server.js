const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const URI = "mongodb+srv://douglas:csis3380@cluster1.syihxvj.mongodb.net/Artlist";
mongoose.connect(URI);

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB connection has been established")
});

const artRouter = require("./routes/route.js");
app.use("/art", artRouter);

app.listen(port, ()=>{
    console.log("Server is running on port " + port);
}); 

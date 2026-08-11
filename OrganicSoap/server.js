const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect("").then(()=>
    console.log("Mongo_DB connected") 
)



app.use("")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const app = require('./app')

dotenv.config({path:"./config.env"})

mongoose.connect(process.env.CONN_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((conn)=>{
    console.log("Connected To Database")
})
.catch((error)=>{
    console.log(error)
})


const port = process.env.PORT||3000

app.listen(port,()=>{
    console.log("Server Started on port " + port)
})
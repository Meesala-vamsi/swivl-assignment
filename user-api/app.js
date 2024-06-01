const express = require("express")
const cors = require("cors")
const router = require("./Routes/userRoutes")
const globalErrorController = require("./Controllers/globalErrorController")
const ErrorFeature = require("./Utils/globalErrorFeatures")

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/user",router)

app.all("*",function(req,res,next){
    const err = new ErrorFeature(`Invalid endpoint ${req.originalUrl}.`,400)
    next(err)
})

app.use(globalErrorController)

module.exports = app
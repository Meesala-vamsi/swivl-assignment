const fs = require("fs")
const User = require("../Models/userModel")
const generatePdf = require("../Utils/generatePdf")
const asyncErrorHandler = require('../Utils/asyncErrorHandler')
const path = require("path")


exports.createUser=asyncErrorHandler(async(req,res,next)=>{
    const user = await User.create(req.body)
    req.user = user._id

    next()
})

exports.updateUser=asyncErrorHandler(async(req,res,next)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    req.user = user._id
    next()
})

exports.deleteUser=asyncErrorHandler(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    fs.unlink(path.join(__dirname,`../pdfFiles/${req.params.id}.pdf`),()=>{
        console.log("File Deleted")
    });
    await User.findByIdAndDelete(req.params.id,{new:true,runValidators:true})
    res.status(200).json({
        status:"success",
        message:"User Deleted Successfully.."
    })
})


const {PDFDocument} = require("pdf-lib")
const fs=require("fs")
const path = require("path")
const User = require("../Models/userModel")
const asyncErrorHandler = require("./asyncErrorHandler")


const generatePdf=asyncErrorHandler(async(req,res,next)=>{

    const userData = await User.findById(req.user._id)
    const pdf = await PDFDocument.create()
    const page = pdf.addPage()
    const {width,height} = page.getSize()
    const fontSize = 25

    page.drawText(`User Information`, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize
      });

    page.drawText(`First Name: ${userData.firstName}`, { x: 50, y: height - 6 * fontSize, size: fontSize });
    page.drawText(`Last Name: ${userData.lastName}`, { x: 50, y: height - 8 * fontSize, size: fontSize });
    page.drawText(`Email: ${userData.email}`, { x: 50, y: height -10  * fontSize, size: fontSize });
    page.drawText(`Phone: ${userData.phone}`, { x: 50, y: height - 12 * fontSize, size: fontSize });

    const savePdf=await pdf.save()

    const filePath = path.join(__dirname, `../pdfFiles/${req.user._id}.pdf`);
    const storingFile=  fs.writeFileSync(filePath,savePdf)

    res.status(201).json({
        message:"User saved and generate a PDF",
        filePath
    })
  
})

module.exports = generatePdf
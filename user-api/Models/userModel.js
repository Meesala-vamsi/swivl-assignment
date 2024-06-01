const mongoose = require("mongoose")
const validator =require("validator")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First Name field is required.."],
        validate:[
            validator.isAlpha,
            "First name should contain only alphabets"
        ]
    },
    lastName:{
        type:String,
        required:[true,"Last Name field is required.."],
        validate:[
            validator.isAlpha,
            "Last name should contain only alphabets"
        ]
    },
    phone:{
        type:String,
        required:[true,"Phone field is required.."],
        validate: {
            validator: function(v) {
              return /^\+\d{11,13}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! Phone number must start with "+" and have a length between 12 to 14 characters.`
          }
    },
    email:{
        type:String,
        required:[true,"Email field is required.."],
        validate:[
            validator.isEmail,
            "Enter a valid Email Address"
        ],
        unique:true
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User
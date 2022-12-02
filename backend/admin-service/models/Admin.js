const mongoose = require('mongoose')


const adminUserSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Admin", adminUserSchema)
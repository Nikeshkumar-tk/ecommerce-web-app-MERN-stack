const asyncHandler = require('express-async-handler')
const Admin = require('../models/Admin')
const hashPassword = require('../configs/hashPassword')


//@desc Creating new admin user
//@acess Admin only

const createAdmin = asyncHandler(async (req, res) => {
    const { adminname, password, email } = req.body

    //Checking for duplicate admin users

    if (adminname && password && email) {

        const duplicateUser = await Admin.findOne({ email: email })

        if (duplicateUser) return res.status(404).json({ message: `The email id ${email} already exists}` })

        //Hashing password

        const hashedPassword = await hashPassword(password)

        //Creating new user

        userObj = {
            adminname,
            email,
            password: hashedPassword
        }

        const admin = await Admin.create(userObj)

        if(!admin) return res.status(500).json({message:"Failed to create new admin user"})


        return res.status(200).json({
            message:"Succesfully created user",
            adminname: admin.adminname
        })

    }

})

module.exports = { createAdmin }
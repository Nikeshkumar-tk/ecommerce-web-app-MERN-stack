const mongoose = require('mongoose')
const User = require('../models/User')
const expressAsyncHandler = require('express-async-handler')
const hashPassword = require('../configs/hashPassword')


//@route /register
//@desc Creating a new user
//@acess not protected

const registerUser = expressAsyncHandler(async (req, res) => {

    const { username, email, password } = req.body

    if (username && email && password) {

        //Checking duplicate user by email

        const duplicateUser = await User.findOne({ email: email })

        if (duplicateUser) return res.status(409).json({ message: `The emailid ${email} already exists}` })

        //Calling hash password function to hash the provided password
        const hashedPassword = await hashPassword(password)

        if (hashedPassword) {

            const userObj = {
                username: username,
                email: email,
                password: hashedPassword
            }

            //Creating new user 
            const user = await User.create(userObj)
            if (!user) return res.status(500).json({ message: "Failed to create user" })
            return res.status(201).json({
                message: "New user created sucessfully",
                username: user.username,
                email: user.email
            })

        }

    }

})


module.exports = { registerUser }
const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const { hashPassword, verifyPassword } = require('../configs/hashPassword')
const generateToken = require("../configs/authorization/jwtSign")



//@route /register
//@desc Creating a new user
//@acess not protected

const registerUser = asyncHandler(async (req, res) => {

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

const userLogin = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    console.log(req.socket.remotePort)
    //Check wheather the user exists

    if (!email || !password) return res.status(404).json({ message: "Please provide essential details" })

    const foundedUser = await User.findOne({ email: email })

    if (!foundedUser) return res.status(404).json({ message: " This email doenot exists " })

    const passwordVerified = await verifyPassword(password, foundedUser.password)

    if (!passwordVerified) return res.status(401).json({ message: "Incorrect password" })

    return res.status(200).json({
        message: "Logged in succesfully",
        token: generateToken(foundedUser._id)
    })


})


module.exports = { registerUser, userLogin }
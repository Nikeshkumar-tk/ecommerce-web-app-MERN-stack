const jwt = require('jsonwebtoken')
const asyncHandler = require("express-async-handler")
const User = require("../models/User")


//@desc Middleware for protected routes

const secure = asyncHandler(async (req, res, next) => {

    let token

    if (!req.headers || !req.headers.authorization.startsWith('Bearer')) {
        res.status(401)
        throw new Error("Unauthorized, Token is not provided")
    }

    try {
        token = req.headers.authorization.split(" ")[1]

        if (!token) {
            res.status(401)
            throw new Error("Unauthorized, Token is not provided")
        }
        //Decoding the provided token

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

        //Acessing user data using decoded token

        req.user = await User.findOne({ _id: decodedToken.id }).select("-password")

        next()

    } catch (err) {

        console.log(err)
        res.status(401)
        throw new Error("Unauthorized")
    }


})

module.exports = secure


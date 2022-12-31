const router = require('express').Router()
const { registerUser, userLogin } = require('../controllers/authControllers')
const loginLimitter = require("../middlewares/rateLimit")


//User routes

//Route for register

router.post("/register", registerUser)
router.post("/login",loginLimitter, userLogin )
router.get("/refresh")


module.exports = router
const router = require('express').Router()
const { registerUser, userLogin } = require('../controllers/userControllers')


//User routes

//Route for register

router.post("/register", registerUser)
router.post("/login", userLogin )


module.exports = router
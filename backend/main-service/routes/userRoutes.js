const router = require('express').Router()
const { registerUser } = require('../controllers/userControllers')


//User routes

//Route for register

router.post("/register", registerUser)


module.exports = router
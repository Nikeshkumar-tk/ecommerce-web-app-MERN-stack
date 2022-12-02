const router = require('express').Router()
const Admin = require("../models/Admin")
const {createAdmin} = require('../controllers/adminUserController')

router.post("/register", createAdmin )

module.exports = router
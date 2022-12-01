const router = require('express').Router()
const { addProduct } = require('../controllers/productControllers')


router.route("/").post(addProduct)




module.exports = router
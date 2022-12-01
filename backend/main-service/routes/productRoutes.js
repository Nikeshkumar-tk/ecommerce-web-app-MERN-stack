const router = require('express').Router()
const { fetchAllProducts } = require('../controllers/productControllers')


router.get("/",fetchAllProducts)

module.exports = router
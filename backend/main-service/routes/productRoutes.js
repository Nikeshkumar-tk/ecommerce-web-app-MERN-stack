const router = require('express').Router()
const { fetchAllProducts } = require('../controllers/productControllers')
const secure = require('../middlewares/authorization')

router.route("/").get(secure, fetchAllProducts)

module.exports = router
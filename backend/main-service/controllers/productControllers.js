const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')

//@desc Adding a new product to the database
//@route Protected

const addProduct = asyncHandler(async (req, res) => {
    const { name, price, description } = req.body

    if (name && price) {

        //Checking for duplication

        const duplicateProduct = await Product.findOne({ name: name })

        if (duplicateProduct) return res.status(409).json({ message: "This product already exists in the database" })

        let productObj = {
            name,
            price

        }


        if (description) {

            productObj.description = description

        }

        //Creating new product in the database

        const product = await Product.create(productObj)

        if (!product) return res.status(500).json({ message: "something went wrong" })

        return res.status(200).json({
            message: `New product ${name} added`
        })


    }else{
        return res.status(422).json({message:"Please provide essential details"})
    }

})
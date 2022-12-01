const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const connectDatabase = require('../configs/db')



const fetchAllProducts = asyncHandler(async (req, res) => {
    connectDatabase()
    const connection = mongoose.connection
    


        const Products = connection.db.collection("products")
    
        const fetchedProducts = await Products.find().toArray()
    
        if (!fetchedProducts) return res.status(500).json({ message: "Something went wrong" })
    
        return res.status(200).json({
            message: "Successfully fetched all products",
            products: fetchedProducts
        })
   
})



module.exports = { fetchAllProducts }
const express = require('express')
const { default: mongoose } = require('mongoose')
connectDatabase = require('./configs/db')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

// Initializing the application
const app = express()

require("dotenv").config()

//Calling database connection function
connectDatabase()

//PORT configurations
const PORT = process.env.PORT || 5000


//Middlewares

app.use(express.json())

//Requests

app.use("/", userRoutes)
app.use("/getproducts", productRoutes)


// Checking database connection
try {

    mongoose.connection.once('open', () => {


        console.log("Connected to  mongoDb database")
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`))


    })
} catch (err) {
    console.log("Unable to connect to database")
}
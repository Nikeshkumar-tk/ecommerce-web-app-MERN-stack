const express = require('express')
const { default: mongoose } = require('mongoose')
const {connectDb} = require('./configs/db')
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')

// Initializing the application
const app = express()

require("dotenv").config()

//Calling database connection function
connectDb()
//PORT configurations
const PORT = process.env.PORT || 5000


//Middlewares

app.use(express.json())

//Requests

app.use("/auth", authRoutes)
app.use("/products", productRoutes)

//Getting database connection

const mongooseConnection = mongoose.connection
// Checking database connection
try {

    mongoose.connection.once('open', () => {


        console.log("Connected to  mongoDb database")
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`))


    })
} catch (err) {
    console.log("Unable to connect to database")
    throw new Error("Database connection failed")
}

module.exports = { mongooseConnection }
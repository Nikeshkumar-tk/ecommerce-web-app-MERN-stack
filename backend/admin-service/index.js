//e-commerce admin service

// App configerations
const app = require("express")()
const mongoose = require('mongoose')
const connectDb = require('./configs/databaseConfig')
require('dotenv').config()

//Router imports

const productRoutes = require('./routes/productRoutes')
const AdminUserRoutes = require('./routes/adminUserRoutes')

//PORT 
const PORT = process.env.PORT || 5001

//Middlewares

app.use(require("express").json())
//Database connection
connectDb()

//Routes

app.use("/products", productRoutes)
app.use("/auth", AdminUserRoutes)

try{
    mongoose.connection.once("open", () => {

        console.log("Connected to mongoDb database")
        app.listen(PORT, () => console.log(`Server started at ${PORT}`))
    })

}catch(err){

    console.log(err)

}


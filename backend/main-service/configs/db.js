const mongoose = require('mongoose')


const connectDb = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_URL)



    } catch (error) {
        console.log(error)
    }

}

const getProductCollection = async () => {
    const collection = await mongoose.connection.db.collection("products")
    
}



// module.exports = { getProductCollection }
// module.exports = connectDb
module.exports = {connectDb,getProductCollection}
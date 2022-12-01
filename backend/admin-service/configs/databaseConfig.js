const mongoose = require('mongoose')


const connectDatabase = async () => {
    
await mongoose.connect(process.env.DATABASE_URL)

}

module.exports = connectDatabase
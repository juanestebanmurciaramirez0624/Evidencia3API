const dotenv = require('dotenv')
const color= require('colors')
const mongoose = require('mongoose')

async function connectDB(){
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Base de datos conectada rey:${conn.connection.host}`.bgBlue.white)
} 
 
module.exports = connectDB



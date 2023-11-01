const express = require("express")
const dotenv = require('dotenv')
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const colors = require('colors')
const connectDB = require('./config/db')

//establecer configuracion
dotenv.config({
    	path: './config/.env'
})


const app = express()

//put para cambiar todos los atributos, patch para cambiar uno
//definir puerto del servidor
app.use(express.json())
//cone bd
connectDB()

const puerto = process.env.PUERTO

//Definir el servidor 

app.listen(puerto,
            console.log(`Servidor ejecutando en ${puerto}`.bgGreen.white))


//url prueba

app.get('/prueba', (req , res) => {
     //EJEMPLO MAS SENCILLO RESPONSIVE
     res.send("puto el que lo lea ")
    })
    
app.use('/bootcamp', 
        bootcampsRoutes)

app.use('/courses', 
        coursesRoutes)

app.use('/reviews', 
        reviewsRoutes)

app.use('/user', 
        usersRoutes)


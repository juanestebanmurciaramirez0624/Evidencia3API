const mongoose = require('mongoose')

const BootcampSchema = mongoose.Schema({
    name:{
        type: String,
        required: [ true, "El nombre es obligatorio" ],
        unique: true,
        maxlength: [50, "Es muy largo el nombre"],
    },
    phone:{
        type: String,
        required: [ true, "El numero es obligatorio" ],
        unique: true,
        max: [9999999999, "Es muy largo el numero"],
    },
    address:{
        type: String,
        required: [ true, "La Dirreccion es obligatorio" ],
        unique: true,
    },
    topics:{
        type: [String],
        required: [ true, "temas son requeridos" ],
        enum: ["Frontend", "Backend", "IA","DevOps"]
    },
    averageRating:{
        type:Number,
        require: [ true, "El promedio es obligatorio" ],
    },
    createdAt:{
        type:Date,
        require: [ true, "La fecha de creacion es obligatori" ],
    }
    
})

module.exports = mongoose.model('Bootcamp', BootcampSchema)

const mongoose = require('mongoose')

const BootcampSchema = mongoose.Schema({
    name:{
        type: String,
        require: [ true, "El nombre es obligatorio" ],
        unique: true,
        maxlength: [50, "Es muy largo el nombre"],
    },
    phone:{
        type: String,
        require: [ true, "El numero es obligatorio" ],
        unique: true,
        maxlength: [20, "Es muy largo el numero"],
    },
    address:{
        type: String,
        require: [ true, "La Dirreccion es obligatorio" ],
        unique: true,
    },
    topics:{
        type: [String],
        require: [ true, "temas son requeridos" ],
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

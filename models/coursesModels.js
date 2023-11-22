const mongoose = require('mongoose')

const CoursesSchema = mongoose.Schema({
    title:{
        type: String,
        required: [ true, "El titulo es obligatorio" ],
        maxlength: [30, "El titulo debe tener maximo 30 caracteres"],
        minlength: [10, "El titulo debe tener minimo 10 caracteres"],
    },
    description:{
        type: String,
        required: [ true, "La descripcion es obligatorio" ],
        minlength: [10, "la descripcion debe tener minimo 10 caracteres"],
    },
    weeks:{
        type: Number,
        required: [ true, "Las semanas son obligatorias" ],
        max: [9 , "El numero maximo de semanas es 9"]
    },
    enroll_cost:{
        type: Number,
        required: [ true, "La valoracion es obligatorio" ],
    },
    tuition:{
        type: Number,
        required: [ true, "La valoracion es obligatorio" ],
    },
    minimunSkill:{
        type: [String],
        required: [ true, "temas son requeridos" ],
        enum: ["benigenner", "Backend", "IA","DevOps"]
    },
    
    createdAt:{
        type:Date,
        require: [ true, "La fecha de creacion es obligatori" ],
    }

})

module.exports = mongoose.model('Courses', CoursesSchema)
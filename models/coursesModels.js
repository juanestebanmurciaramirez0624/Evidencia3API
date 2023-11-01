const mongoose = require('mongoose')

const CoursesSchema = mongoose.Schema({
    title:{
        type: String,
        require: [ true, "El titulo es obligatorio" ],
        maxlength: [100, "Es muy largo el titulo"],
    },
    description:{
        type: String,
        require: [ true, "La descripcion es obligatorio" ]
    },
    weeks:{
        type: Number,
        require: [ true, "Las semanas son obligatorias" ],
    },
    tuition:{
        type: Number,
        require: [ true, "La valoracion es obligatorio" ],
    },
    minimunSkill:{
        type: [String],
        require: [ true, "temas son requeridos" ],
        enum: ["benigenner", "Backend", "IA","DevOps"]
    },
    createdAt:{
        type:Date,
        require: [ true, "La fecha de creacion es obligatori" ],
    }

})

module.exports = mongoose.model('Courses', CoursesSchema)
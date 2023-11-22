const mongoose = require('mongoose')

const ReviewsSchema = mongoose.Schema({
    title:{
        type: String,
        require: [ true, "El titulo es obligatorio" ],
        maxlength: [20, "Es muy largo el titulo"],
    },
    comment:{
        type: String,
        require: [ true, "El comentario es obligatorio" ],
        unique: true,
    },
    rating:{
        type: Number,
        require: [ true, "La valoracion es obligatorio" ],
    },
   

})

module.exports = mongoose.model('Reviews', ReviewsSchema)
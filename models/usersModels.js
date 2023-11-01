const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    name:{
        type: String,
        require: [ true, "El nombre es obligatorio" ],
        maxlength: [60, "Es muy largo el nombre"],
    },
    email:{
        type: String,
        require: [ true, "El nombre es obligatorio" ],
        unique: true,
    },
    role:{
        type: String,
        require: [ true, "El nombre es obligatorio" ],
    },
    password:{
        type: String,
        require: [ true, "El nombre es obligatorio" ],
    },

})

module.exports = mongoose.model('Users', UsersSchema)
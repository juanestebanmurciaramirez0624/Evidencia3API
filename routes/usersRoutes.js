const express = require('express')
const Users = require('../models/usersModels')

//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas



   

////USUARIOS/////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            const users = await Users.find()
            return  res.json({
                success: true,
                data: users
            })
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Seleccionando los usuarios| cuyo id es ${bootcapmId}`
            }
            )
        })


//CREAAAAAAAR
router.post(('/'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear usuario"
    })
})




//ACTUALIZAAAAAAR

router.put(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los usuarios| cuyo id es ${bootcapmId}`
            }
            )
        })


//ELIMINAAAAAR

router.delete(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los usuarios| cuyo id es ${bootcapmId}`
            }
            )
        })

module.exports = router
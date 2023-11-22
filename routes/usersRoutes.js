const express = require('express')
const Users = require('../models/usersModels')
const { default: mongoose } = require('mongoose')

//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas



   

////USUARIOS/////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            const users = await Users.find()
            if(users.length > 0){
                res.status(200).json({
                    success: true,
                    data: users
                })
            }else{
                res.status(404).json({
                    success: false,
                    msg: "No existen users"
                })
            } 
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async (req, res) => {
         const userId =   req.params.id    
         try {
            if(!mongoose.Types.ObjectId.isValid(userId)){
                return res.status(404).json({
                    success: false,
                    msg: "Id del user no valido"
                })
            } else{
                //Traerlo por id
                const users = await Users.findById(userId)
                if (!users){
                    res.status(404).json({
                        success: false,
                        msg: "users no encotrado"
                    })
                } else {
                        
                }
                return res.json({
                    success: true,
                    data: users
                })
            }

         } catch (error) {
            res.status(500).json({
                success: false,
                msg: `Error encontrado ${error.message}`
            })
         } 
        })


//CREAAAAAAAR
router.post(('/'),
        async (req, res) => {
            try {
                const newUser =  await Users.create(req.body)
                return  res.json({
                success: true,
                data: newUser
            }) 
            } catch (error) {
                res.status(500).json({
                    success: false,
                    msg: `Error encontrado: ${error.message}`
                  })
            }})




//ACTUALIZAAAAAAR

router.put(('/:id'),
        async (req, res) => {
         const userId =   req.params.id    
         updUser = await Users.findByIdAndUpdate(
            userId,
            req.body,{ 
                new: true
            }
         )
            return res.json(
            {
                success: true,
                data: updUser
            }
            )
        })


//ELIMINAAAAAR

router.delete(('/:id'),
        async (req, res) => {
         const userId =   req.params.id    
         await Users.findByIdAndDelete(userId)
            return res.json(
            {
                success: true,
                data: []
            }
            )
        })

module.exports = router
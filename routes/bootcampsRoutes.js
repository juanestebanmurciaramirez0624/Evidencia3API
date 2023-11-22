const express = require('express')
const Bootcamp = require('../models/bootcampModels')
const { default: mongoose } = require('mongoose')
//definir ruteador de bootcamps
const router = express.Router()


//Utiliza el rooteador para la creacion de rutas


//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            const bootcamp = await Bootcamp.find()
            // NO HAY BOOTCAMPS:
            if(bootcamp.length > 0){
                // Existen Bootcamps
                res.status(200).json({
                    success: true,
                    data: bootcamp
                })
            }else{
                res.status(404).json({
                    success: false,
                    msg: "No existen bootcamps"
                })
            }    
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async(req, res) => {
         const bootcapmId =  req.params.id   
         try {
            // bootcapm id sea invalido
            if(!mongoose.Types.ObjectId.isValid(bootcapmId)){
                return res.status(404).json({
                    success: false,
                    msg: "Id del bootcapm invalido"
                })
            } else{
                //Traerlo por id
                const bootcamp = await Bootcamp.findById(bootcapmId)
                if (!bootcamp){
                    res.status(404).json({
                        success: false,
                        msg: "bootcapm no encotrado"
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        data: bootcamp
                    })
                }
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
                const newBootcamp =  await Bootcamp.create(req.body)
                return  res.status(201).json({
                success: true,
                data: newBootcamp
    
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
            const bootcapmId =  req.params.id   
            try {
               // bootcapm id sea invalido
               if(!mongoose.Types.ObjectId.isValid(bootcapmId)){
                   return res.status(404).json({
                       success: false,
                       msg: "Id del bootcapm invalido"
                   })
               } else{
                   //Traerlo por id
                   const bootcamp = await Bootcamp.findByIdAndUpdate(bootcapmId , 
                                                                    req.body,{
                                                                        new: true,
                                                                        runValidators: true
                                                                    })
                   if (!bootcamp){
                       res.status(404).json({
                           success: false,
                           msg: "bootcapm no encotrado"
                       })
                   } else {
                       return res.status(200).json({
                           success: true,
                           data: bootcamp
                       })
                   }
               }
   
            } catch (error) {
               res.status(500).json({
                   success: false,
                   msg: `Error encontrado ${error.message}`
               })
            } 
})


//ELIMINAAAAAR

router.delete(('/:id'),
        async (req, res) => {
        const bootcampId =  req.params.id
        await Bootcamp.findByIdAndDelete(bootcampId)
        return res.json({
            success: true,
            data: []
        })
        })

module.exports = router
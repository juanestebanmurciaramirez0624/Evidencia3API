const express = require('express')
const Bootcamp = require('../models/bootcampModels')
//definir ruteador de bootcamps
const router = express.Router()


//Utiliza el rooteador para la creacion de rutas


//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            //traer los bootcamps en mongo
            const bootcamp = 
                    await Bootcamp.find()
            return  res.json({
                success: true,
                data: bootcamp
            })
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async(req, res) => {
         const bootcapmId =  req.params.id    
         //Traerlo por id
         const bootcamp = await Bootcamp.findById(bootcapmId)
            return res.json(
            {
                success: true,
                data: bootcamp
            }
            )
        })


//CREAAAAAAAR

router.post(('/'),
        async (req, res) => {
        const newBootcamp =  await Bootcamp.create(req.body)
        return  res.json({
        success: true,
        data: newBootcamp
    })
})


//ACTUALIZAAAAAAR

router.put(('/:id'),
        async (req, res) => {
         const bootcampId = req.params.id    
         updBootcamp =  await Bootcamp.findByIdAndUpdate(
            bootcampId,
            req.body,{ 
                new: true
            }
         )
            return res.json(
            {
                success: true,
                data: updBootcamp
            }
            )
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
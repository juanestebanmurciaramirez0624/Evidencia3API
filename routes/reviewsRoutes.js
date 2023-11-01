const express = require('express')
const Reviews = require('../models/reviewModels')
//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas




////REVIEWS////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            const reviews = 
                await Reviews.find()
            return  res.json({
                success: true,
                data: reviews
            })
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Seleccionando los reviews | cuyo id es ${bootcapmId}`
            }
            )
        })


//CREAAAAAAAR
router.post(('/'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear reviews"
    })
})




//ACTUALIZAAAAAAR

router.put(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los reviews | cuyo id es ${bootcapmId}`
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
                msg: `Eliminando los reviews | cuyo id es ${bootcapmId}`
            }
            )
        })
        
        
module.exports = router
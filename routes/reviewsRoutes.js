const express = require('express')
const Reviews = require('../models/reviewModels')
//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas




////REVIEWS////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            const reviews = await Reviews.find()
            if(reviews.length > 0){
                res.status(200).json({
                    success: true,
                    data: reviews
                })
            }else{
                res.status(404).json({
                    success: false,
                    msg: "No existen reviews"
                })
            }    
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async(req, res) => {
          const reviewsId =  req.params.id    
          try {
            if(!mongoose.Types.ObjectId.isValid(bootcapmId)){
                return res.status(404).json({
                    success: false,
                    msg: "reviews no encotrado"
                })
            } else{
                //Traerlo por id
                const reviews = await Reviews.findById(reviewsId)
                if (!reviews){
                    res.status(404).json({
                        success: false,
                        msg: "reviews no encotrado"
                    })
                } else {
                        
                }
                return res.json({
                    success: true,
                    data: reviews
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
                const newReview =  await Reviews.create(req.body)
                return  res.json({
                success: true,
                data: newReview
            })
            } catch (error) {
                res.status(500).json({
                    success: false,
                    msg: `Error encontrado: ${error.message}`
                  })
            }
     
})




//ACTUALIZAAAAAAR

router.put(('/:id'),
        async (req, res) => {
            const reviewId = req.params.id  
            updReview = await Reviews.findByIdAndUpdate(
                reviewId,
                req.body,{ 
                    new: true
                }
             )
            return res.json(
            {
                success: true,
                data: updReview
            }
            )
        })


//ELIMINAAAAAR

router.delete(('/:id'),
        async (req, res) => {
         const reviewId =   req.params.id   
         await Reviews.findByIdAndDelete(reviewId)
            return res.json(
            {
                success: true,
                data: []
            })
        })
        
        
module.exports = router
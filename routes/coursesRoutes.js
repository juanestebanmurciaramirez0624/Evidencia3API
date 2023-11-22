const express = require('express')
const Courses = require('../models/coursesModels')
const { default: mongoose } = require('mongoose')

//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas




////CURSOS/////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            const courses = await Courses.find()
            if(courses.length > 0){
                res.status(200).json({
                    success: true,
                    data: courses
                })
            }else{
                res.status(404).json({
                    success: false,
                    msg: "No existen courses"
                })
            } 
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async (req, res) => {
        const courseId =   req.params.id  
        try {
            if(!mongoose.Types.ObjectId.isValid(courseId)){
                return res.status(404).json({
                    success: false,
                    msg: "course no encotrado"
                })
            } else{
                const course= await Courses.findById(courseId)
                if (!course){
                    res.status(404).json({
                        success: false,
                        msg: "course no encotrado"
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        data: course
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
                const newCourses = await Courses.create(req.body)
                return res.status(201).json({
                success: true,
                data: newCourses
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
 const coursesId = req.params.id    
 updCourses =  await Courses.findByIdAndUpdate(
    coursesId,
    req.body,{ 
        new: true
    }
 )
    return res.json(
    {
        success: true,
        data: updCourses
    }
    )
})


//ELIMINAAAAAR

router.delete(('/:id'),
        async (req, res) => {
         const courseId =   req.params.id 
         await Courses.findByIdAndDelete(courseId)  
         return res.json({
            success: true,
            data: []
         })
        })



module.exports = router
const express = require('express')
const Courses = require('../models/coursesModels')

//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas




////CURSOS/////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {

            const courses = await Courses.find()
            return  res.json({
                success: true,
                data: courses
            })
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async (req, res) => {
        Id =   req.params.id  
        const cours= await Courses.findById(Id)
            return res.json(
            {
                success: true,
                data:cours
            }
            )
        })

    

//CREAAAAAAAR
router.post(('/'),
        async (req, res) => {
        const newCourses = await Courses.create(req.body)
        return res.json({
        success: true,
        data: newCourses
        })
        
})





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
const User = require('../models/user')
const userRouter = require('express').Router()
const bcrypt = require('bcrypt')

userRouter.post('/', async(request, response, next)=>{
    try {
        const body = request.body
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash
        })
        await user.save()
        response.status(201).json(user)
    } catch (error) {
        next(error)
    }

})

userRouter.get('/', async(request, response, next)=>{
    try {
        const users = await User.find({})
        console.log("🚀 ~ file: user.js:27 ~ userRouter.get ~ users:", users)
        response.status(200).json(users)
    } catch (error) {
        next(error)
    }
})

userRouter.get('/:id', async(request, response, next)=>{
    try {
        const user = await User.findById(request.params.id).populate('blogs')
        response.status(200).json(user)
    } catch (error) {
        next(error)
    }
})



module.exports = userRouter
const userExtractor = require('../utils/middleware').userExtractor
const Blog = require('../models/blog')
const Comment = require('../models/comment')
const commentRouter = require('express').Router()

commentRouter.post('/:id', userExtractor, async (request,response, next) => {
    try {
        const {content} = request.body
        const {id} = request.params
        const blog = await Blog.findById(id)
        console.log("🚀 ~ file: comment.js:11 ~ commentRouter.post ~ blog:", blog)
        const comment = new Comment({
            content,
            blog: blog._id
        })
        console.log("🚀 ~ file: comment.js:16 ~ commentRouter.post ~ comment:", comment)
        const savedComment = await comment.save()
        blog.comments = blog.comments.concat(savedComment._id)
        await blog.save()
        response.status(201).json(savedComment)
    } catch (error) {
        next(error)
    }
})


module.exports = commentRouter
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true,
    },
    author: String,
    url:String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Comment'
        }
    ]

})

blogSchema.plugin(uniqueValidator)


blogSchema.set('toJSON',{
    transform: (document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog
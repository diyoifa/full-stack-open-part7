const supertest = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const Blog = require('../models/blog')
const Comment = require('../models/comment')
const helper = require('./test_helper')

const api = supertest(app)

let token = null
let idBlog = null
beforeEach(async () => {
    await Blog.deleteMany({})
    await Comment.deleteMany({})

    const user  = helper.initialUsers[0]
    const credentials = {
        username: user.username,
        password: user.password
    }
    const response = await api.post('/api/login').send(credentials)
    token = response.body.token

    const blog = {
        title: 'test',
        url: 'localhost:3003',
    }

    const {body} = await api
    .post('/api/blogs')
    .send(blog)
    .set('Authorization', `bearer ${token}`)
    // console.log("🚀 ~ file: comment.test.js:33 ~ beforeEach ~ body:", body)

    idBlog = body.id
    // console.log("🚀 ~ file: comment.test.js:36 ~ beforeEach ~ idBlog:", idBlog)

}, 10000)

describe('when creating a comment',()=>{
    test('a comment is created', async () => {
        const comment = {
            content: 'test',
        }
        // console.log(idBlog)
        const {body} = await api
        .post(`/api/comment/${idBlog}`)
        .send(comment)
        .set('Authorization', `bearer ${token}`)
        expect(201)
        expect(body.content).toBe(comment.content)


    })
})



afterAll(() => mongoose.connection.close())
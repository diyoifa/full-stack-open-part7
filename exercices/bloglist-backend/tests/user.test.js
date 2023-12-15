const superTest = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const User = require('../models/user')
const helper = require('./test_helper')
const bcrypt = require('bcrypt')

const api = superTest(app)

beforeEach(async()=>{
    await User.deleteMany({})
    for(const user of helper.initialUsers){
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(user.password, saltRounds)
        const userObject = new User({
            username: user.username,
            name: user.name,
            passwordHash
        })
        await userObject.save()
    }
}, 10000)

describe('adding some users', ()=>{
    test('adding a valid user return user and status 201', async()=>{
        const initialUsers = await helper.usersInDb()
        const newUser =  {
            username: 'test3',
            name: 'test3',
            password: 'test3'
        }
        const response  = await api.post('/api/users').send(newUser).expect(201).expect('Content-Type', /application\/json/)
        const users = await helper.usersInDb()
        expect(response.body.username).toBe(newUser.username)
        expect(initialUsers.length).toBe(users.length-1)
    })
})

describe('getting users', ()=>{
    test('getting all users', async()=>{
        const response = await api.get('/api/users').expect(200).expect('Content-Type', /application\/json/)
        expect(response.body.length).toBe(helper.initialUsers.length)
    })

    test('getting a single user', async()=>{
        const users = await helper.usersInDb()
        const response = await api.get(`/api/users/${users[0].id}`).expect(200).expect('Content-Type', /application\/json/)
        expect(response.body.username).toBe(users[0].username)
    })
})

afterAll(()=>mongoose.connection.close())
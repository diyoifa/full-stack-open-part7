import { createSlice } from "@reduxjs/toolkit";
import blogService from '../../services/blogs'
import {login} from '../../services/login'
import { setNotification } from "./notification";

const userSlice = createSlice({
    name:'user',
    initialState: JSON.parse(window.localStorage.getItem('user')) || null,
    reducers: {
        setUser(state, action){
            return action.payload
        },
        logOut(state, action){
            window.localStorage.removeItem('user')
            return null
        }
    }
})

export const {setUser, logOut} = userSlice.actions
export default userSlice.reducer

export const Login = (credentials) => {
    console.log("🚀 ~ file: user.js:20 ~ login ~ credentials:", credentials)
    return async (dispatch) => {
        try {
            const user = await login(credentials)
            console.log("🚀 ~ file: user.js:24 ~ return ~ user:", user)
            window.localStorage.setItem('user', JSON.stringify(user))
            dispatch(setUser(user))
            blogService.setToken(user?.token)
            dispatch(setNotification(`${user?.username} Logged in succesfully`, 5))
            return true
        } catch (error) {
            console.log("🚀 ~ file: user.js:26 ~ return ~ error:", error)
            dispatch(setNotification('Wrong Credentials', 5))
            return false
        }
    }
}
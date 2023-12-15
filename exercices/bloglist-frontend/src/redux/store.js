import {configureStore} from '@reduxjs/toolkit'
import notificationReducer from './reducers/notification'
import userReducer from './reducers/user'


const store = configureStore({
    reducer:{
        notification: notificationReducer,
        user: userReducer
    }
})

export default store
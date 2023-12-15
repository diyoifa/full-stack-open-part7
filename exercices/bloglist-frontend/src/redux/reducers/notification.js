import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        notificate(state, action){
            return action.payload
        },
        cleanNotification(state, action){
            return null
        }
    } 
})

export const {notificate, cleanNotification} = notificationSlice.actions

export default notificationSlice.reducer

export const setNotification = (notification, seconds) => {
    return dispatch => {
        dispatch(notificate(notification))
        setTimeout(() => {
            dispatch(cleanNotification())
        }, seconds * 1000)
    }
}
import React from 'react'
import {useSelector} from 'react-redux'


const AppNotification = () => {
    const notification = useSelector( state => state.notification)
    console.log("🚀 ~ file: Notification.jsx:6 ~ Notification ~ notification:", notification)
    const style = {
        border: '2px solid green',
        color: 'green',
        font: '48px bold',
        padding:'4px'
    }

    if(!notification){
        return null
    }

  return (
    <div style={style}>
        {notification}
    </div>
  )
}

export default AppNotification

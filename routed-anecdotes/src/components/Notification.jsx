/* eslint-disable react/prop-types */
const Notification = ({notification}) => {

    const style = {
        border:"2px solid blue"
    }

    if(notification === ""){
        return null
    }


  return (
    <div style={style}>
        {notification}
    </div>
  )
}

export default Notification

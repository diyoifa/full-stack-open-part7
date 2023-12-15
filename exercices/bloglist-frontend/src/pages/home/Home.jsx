import React from 'react'
import Togglable from '../../components/Togglable'
import CreateBlogForm from '../../components/CreateBlogForm'
import BlogsList from '../../components/BlogsList'
import Notification from '../../components/Notification'

const Home = () => {
  return (
    <div>
       {/* <Notification/> */}
       <Togglable buttonLabel="create new">
         <CreateBlogForm/>
       </Togglable>
       <BlogsList/>
    </div>
  )
}

export default Home

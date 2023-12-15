import React from 'react'
import useField from '../hooks/useField'
import useUser from '../hooks/useUser'


const CreateBlogForm = () => {
    // const dispatch = useDispatch()
    const {createBlog} = useUser()
    const title = useField('text')
    const url = useField('text')

    const onSubmit = async (event) => {
        event.preventDefault()
        createBlog({title: title.value, url: url.value})
    }

  return (
    <div>
      <h1>Create New</h1>
      <form onSubmit={onSubmit}>
        <div>
            <label>Title: 
                <input
                    id='title' 
                    name='title' 
                    {...title}
                    required
                />
            </label>
        </div>
        <div>
            <label>Url: 
                <input
                    id='url' 
                    name='url' 
                    {...url}
                    required
                />
            </label>
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default CreateBlogForm

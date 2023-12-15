import React from 'react'
import useField from '../hooks/useField'
import useBlog from '../hooks/useBlog'
const Comment = ({id}) => {
  const comment = useField('text')

  const {commentBlog} = useBlog();

  const handleSubmit = (event) => {
    event.preventDefault();
    commentBlog(id, comment.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input
            id='comment' 
            name='comment' 
            {...comment}
            required
        />
        <button type="submit">add comment</button>
    </form>
  )
}

export default Comment

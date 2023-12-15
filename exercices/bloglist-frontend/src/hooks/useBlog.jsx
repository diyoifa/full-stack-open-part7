import {useMutation, useQueryClient} from 'react-query'
import blogServices from '../services/blogs'

const useBlog = () => {

  const queryClient = useQueryClient()

  const mutateLike = useMutation((blog) => blogServices.update(blog.id, {likes: blog.likes + 1}),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['blog', data.id], data)
      }
    }
  )

  const mutateRemove = useMutation((id) => blogServices.remove(id),{
    onSuccess: () => {
      queryClient.invalidateQueries('blogs')
    }
  })

  const mutateComment = useMutation((id, comment) => blogServices.comment(id, comment),{
    onSuccess: () => {
      queryClient.invalidateQueries('blogs')
    }
  })

  const giveLike = (blog) => {
    mutateLike.mutate(blog)
  }

  const removeBlog = (id) => {
    mutateRemove.mutate(id)
  }

  const commentBlog = (id, comment) => { 
    mutateComment.mutate(id, comment)
  }

  return{
    giveLike,
    removeBlog,
    commentBlog
  }
}

export default useBlog
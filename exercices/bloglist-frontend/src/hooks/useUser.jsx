import { Login, logOut } from "../redux/reducers/user";
import { useSelector, useDispatch } from "react-redux";
import {useMutation, useQueryClient} from 'react-query'
import blogServices from "../services/blogs";
import { setNotification } from '../redux/reducers/notification'


const useUser = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  blogServices.setToken(user?.token)
  

  const queryClient = useQueryClient()

  const mutation = useMutation({
    queryKey: 'createBlog',
    mutationFn: blogServices.create,
    onSuccess: (data) => {
      // console.log("🚀 ~ file: useUser.jsx:24 ~ useMutation ~ data", data)
      queryClient.invalidateQueries('blogs')
      // const blogs = queryClient.getQueryData('blogs')
      // console.log("🚀 ~ file: useUser.jsx:24 ~ useMutation ~ blogs", blogs)
      // queryClient.setQueryData('blogs', [...blogs, data])
      dispatch(setNotification(`New blog ${data.title} added`, 5))
    },
    onError: (error) => {
      // console.log("🚀 ~ file: useUser.jsx:29 ~ useUser ~ error:", error.response.data.error)
      dispatch(setNotification(error.response.data.error, 5))
    }
  })

  const createBlog = async (data) => {
    console.log(data)
    mutation.mutate(data)
  }

  const LogOut = () => dispatch(logOut());

  const login = async (data, onSucces) => {
    const isSuccess = await dispatch(Login(data));
    // console.log("🚀 ~ file: useUser.jsx:15 ~ login ~ isSuccess:", isSuccess)
    
    if (isSuccess) {
      onSucces();
    }
  };

  return {
    user,
    LogOut,
    login,
    createBlog,
  };
};

export default useUser;

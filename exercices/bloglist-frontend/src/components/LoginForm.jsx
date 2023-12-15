import useField from '../hooks/useField'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'
const LoginForm = () => {

   const username = useField('text')
   const password = useField('password')
   const {login} = useUser() 

    const navigate = useNavigate()

    const handleSubmit = async(event) => {
        event.preventDefault()
        login({username: username.value, password: password.value}, () => navigate('/'))
    }

  return (
    <div>
        <h2>Login</h2>
      <form id='login-form' onSubmit={handleSubmit}>
        <div>
            <label>Username : 
                <input
                    {...username}
                    name='username'
                    placeholder='username'
                />
            </label>
        </div>
        <div>
            <label>password : 
                <input 
                    {...password}
                    placeholder='password'
                />
            </label>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}



export default LoginForm

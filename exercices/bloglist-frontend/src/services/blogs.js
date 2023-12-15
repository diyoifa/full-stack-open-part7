import axios from 'axios'
// import useUser from '../hooks/useUser'
const baseUrl = 'http://localhost:3003/api/blogs'


let token = null

const setToken = newToken => token = `bearer ${newToken}`


const getAll = async() => {
  const request = await axios.get(baseUrl)
  // console.log('entré')
  // console.log("🚀 ~ file: blogs.js:6 ~ getAll ~ request:", request)
  return request.data
}

const getOne = async(id) => {
  const request = await axios.get(`${ baseUrl }/${ id }`)
  return request.data

}

const create = async newObject => {
  // console.log("🚀 ~ file: blogs.js:19 ~ create ~ newObject:", newObject)
  const config = {
    headers: { 
      Authorization: token },
  }
  // console.log(config)
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async(id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${ baseUrl }/${ id }`, newObject, config)
  return response.data
}

const remove = async(id)=>{
   await axios.delete(`${ baseUrl }/${ id }`, { headers: { Authorization: token } })
}

const comment = async(id, comment) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(`${ baseUrl }/comment/${ id }`, comment, config)
  return response.data
}

export default { getAll, setToken, create, update, remove, getOne, comment }